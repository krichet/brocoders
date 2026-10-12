export const levels = ['open', 'internal', 'restricted'];

export function canViewChat(role, chat) {
  if (!role || !role.companies.includes(chat.company)) return false;
  if (levels.indexOf(chat.level) > levels.indexOf(role.maxLevel)) return false;
  return role.chats.includes('*') || role.chats.includes(chat.id);
}

export function canReviewTicket(role, ticket) {
  return Boolean(role?.canApprove && (role.id === 'owner' || role.id === ticket.role));
}

export function inferLiveProposal(messages) {
  if (!messages.length) return null;
  const recent = messages.slice(-5);
  const text = recent.map((item) => item.text).join(' ').toLowerCase();
  let role = 'adviser';
  let title = 'Review decision raised in live chat';
  let focus = 'Prepare an options memo for the decision discussed in the live chat.';
  if (/cash|payment|invoice|budget|forecast|deposit|платеж|оплат|счет|бюджет|касс/i.test(text)) {
    role = 'treasurer';
    title = 'Review payment or cash question from live chat';
    focus = 'Prepare a treasury review of the amount, due date, authority and cash impact.';
  } else if (/resolution|signature|signatory|board|shareholder|filing|compliance|подпис|решени|протокол|собрани/i.test(text)) {
    role = 'governance';
    title = 'Check governance action from live chat';
    focus = 'Confirm the required approval and prepare a governance draft for human review.';
  } else if (/supplier|lease|expand|option|strategy|поставщик|аренд|расшир|вариант/i.test(text)) {
    title = 'Compare options raised in live chat';
    focus = 'Prepare an options-and-recommendation memo with alternatives and risks.';
  }
  const sourceText = recent.map((item) => item.text).filter(Boolean);
  return {
    role,
    title,
    summary: sourceText.length ? `The recent conversation raises a possible ${role === 'adviser' ? 'business decision' : role === 'treasurer' ? 'treasury task' : 'governance task'}. Source excerpt: ${sourceText.slice(-2).join(' / ').slice(0, 340)}` : 'Recent live messages require review.',
    description: `${focus}\n\nSource context:\n${sourceText.map((item) => `• ${item}`).join('\n').slice(0, 1200)}`,
    missing: 'Confirm company, decision owner, due date and any figures or documents mentioned in the conversation.',
    priority: 'Medium',
    evidence: recent.map((item) => item.id),
  };
}

export function readStored(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}
