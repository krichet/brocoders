export const companies = [
  { id: 'mariner', name: 'Mariner Foods', initials: 'MF', color: '#dcece6' },
  { id: 'meridian', name: 'Meridian Ventures', initials: 'MV', color: '#eee4dc' },
  { id: 'pilot', name: 'Northstar Labs', initials: 'NL', color: '#e2e6f2' },
];

export const roleNames = {
  treasurer: 'Treasurer',
  governance: 'Corporate Secretary',
  adviser: 'Strategic Adviser',
};

export const initialRoles = [
  { id: 'owner', name: 'Owner', maxLevel: 'restricted', companies: ['mariner', 'meridian', 'pilot'], chats: ['*'], canEdit: true, canApprove: true },
  { id: 'treasurer', name: 'Treasurer', maxLevel: 'restricted', companies: ['mariner', 'pilot'], chats: ['cash', 'payables', 'payment', 'live'], canEdit: true, canApprove: true },
  { id: 'governance', name: 'Corporate Secretary', maxLevel: 'restricted', companies: ['mariner', 'meridian'], chats: ['resolution', 'compliance', 'lease'], canEdit: true, canApprove: true },
  { id: 'adviser', name: 'Strategic Adviser', maxLevel: 'internal', companies: ['mariner', 'meridian', 'pilot'], chats: ['supplier', 'expansion', 'operations', 'live'], canEdit: true, canApprove: true },
];

const msg = (id, author, time, text) => ({ id, author, time, text });

export const mockChats = [
  {
    id: 'cash', company: 'mariner', title: 'Treasury · Weekly cash check', channel: 'Google Chat Space', level: 'restricted', role: 'treasurer', unread: 3,
    messages: [
      msg('cash-1', 'Amira', '09:12', 'The operating account closed yesterday at $1.42m. I have not received the final bank reconciliation yet.'),
      msg('cash-2', 'Daniel', '09:18', 'Payroll of roughly $410k lands Friday, and the packaging supplier is requesting $280k on Thursday.'),
      msg('cash-3', 'Amira', '09:24', 'Customer receipts expected this week are $360k, but the largest invoice is still unconfirmed.'),
      msg('cash-4', 'Max', '09:31', 'Could treasury give us a short view of the next two weeks before we release the supplier payment?'),
    ],
    summary: 'A supplier payment and payroll fall due before a large customer receipt is confirmed. The cash figure is provisional because bank reconciliation is pending.',
    proposal: { title: 'Prepare two-week cash position and payment review', description: 'Summarize opening cash, confirmed obligations and expected receipts. Flag the timing risk before the $280k supplier payment is released.', missing: 'Final bank reconciliation; confirmed receipt date for the largest customer invoice.', priority: 'High', evidence: ['cash-1', 'cash-2', 'cash-3', 'cash-4'] },
  },
  {
    id: 'supplier', company: 'mariner', title: 'Operations · Packaging supplier', channel: 'Google Chat Space', level: 'internal', role: 'adviser', unread: 2,
    messages: [
      msg('supplier-1', 'Lena', '10:04', 'Our current packaging supplier missed the last two delivery windows. Production lost half a day on Monday.'),
      msg('supplier-2', 'Ravi', '10:11', 'BlueHarbor can take 70% of the volume from November. Their quoted unit price is 6% higher.'),
      msg('supplier-3', 'Lena', '10:19', 'We have not checked their quality data or exit terms with the current supplier.'),
      msg('supplier-4', 'Max', '10:28', 'Please compare staying, splitting volume and switching fully before Friday.'),
    ],
    summary: 'The current supplier has repeated delivery failures. An alternative can cover part of the volume at a higher price, but quality and contract terms remain unknown.',
    proposal: { title: 'Compare options for packaging supplier change', description: 'Prepare an options memo covering stay, dual-source and full switch. Compare continuity, cost and execution risk, then recommend the next decision.', missing: 'BlueHarbor quality evidence; current supplier exit terms; total cost impact.', priority: 'High', evidence: ['supplier-1', 'supplier-2', 'supplier-3', 'supplier-4'] },
  },
  {
    id: 'resolution', company: 'meridian', title: 'Governance · Warehouse lease', channel: 'Google Chat Space', level: 'restricted', role: 'governance', unread: 1,
    messages: [
      msg('resolution-1', 'Sofia', '11:02', 'The new warehouse lease is ready for signature. Five-year term, with a renewal option.'),
      msg('resolution-2', 'Max', '11:14', 'I am comfortable with the commercial terms. Can we sign this week?'),
      msg('resolution-3', 'Tetiana', '11:22', 'Our delegation schedule may require a shareholder resolution for leases above three years.'),
      msg('resolution-4', 'Sofia', '11:35', 'Legal has not yet confirmed the signing entity or the authorized signatory.'),
    ],
    summary: 'A five-year lease may cross the company’s approval threshold. The signing entity and authority are not confirmed.',
    proposal: { title: 'Review approval requirements for warehouse lease', description: 'Check the delegation schedule. If a resolution is required, prepare a draft for legal and owner review before signature.', missing: 'Current delegation schedule; final lease; signing entity; authorized signatory.', priority: 'High', evidence: ['resolution-1', 'resolution-3', 'resolution-4'] },
  },
  {
    id: 'payables', company: 'mariner', title: 'Finance · Upcoming obligations', channel: 'Forwarded email', level: 'restricted', role: 'treasurer', unread: 0,
    messages: [
      msg('payables-1', 'AP mailbox', 'Yesterday', 'The logistics partner sent a reminder: $94,000 due on 18 October.'),
      msg('payables-2', 'Amira', 'Yesterday', 'That amount is in the forecast, but the invoice may include a disputed surcharge.'),
      msg('payables-3', 'Daniel', 'Yesterday', 'Please do not approve payment until Operations confirms the surcharge.'),
    ],
    summary: 'A near-term logistics obligation is recorded, but part of the invoice is disputed and payment is on hold.',
    proposal: { title: 'Verify logistics invoice before payment', description: 'Confirm the undisputed amount and due date, then update the obligations list and payment recommendation.', missing: 'Operations confirmation of surcharge; final approved invoice amount.', priority: 'Medium', evidence: ['payables-1', 'payables-2', 'payables-3'] },
  },
  {
    id: 'expansion', company: 'meridian', title: 'Strategy · Cebu expansion', channel: 'Google Chat Space', level: 'internal', role: 'adviser', unread: 4,
    messages: [
      msg('expansion-1', 'Kai', 'Mon 14:05', 'The Cebu pilot reached 82% of the sales target in month two.'),
      msg('expansion-2', 'Sofia', 'Mon 14:12', 'The landlord offered us the adjacent unit, but wants an answer by month-end.'),
      msg('expansion-3', 'Max', 'Mon 14:18', 'I would like a view on whether to expand now or wait for another quarter of data.'),
      msg('expansion-4', 'Kai', 'Mon 14:31', 'We still need a revised staffing estimate and a full fit-out quote.'),
    ],
    summary: 'Expansion timing is under discussion after a pilot that is below target. A property option has a deadline, but key cost inputs are missing.',
    proposal: { title: 'Assess Cebu expansion timing', description: 'Compare expanding now with waiting one quarter. Include demand evidence, property deadline, staffing and fit-out economics.', missing: 'Revised staffing estimate; full fit-out quote; month-three sales trend.', priority: 'Medium', evidence: ['expansion-1', 'expansion-2', 'expansion-3', 'expansion-4'] },
  },
  {
    id: 'compliance', company: 'meridian', title: 'Governance · Compliance calendar', channel: 'Google Chat Space', level: 'internal', role: 'governance', unread: 0,
    messages: [
      msg('compliance-1', 'Tetiana', 'Tue 09:02', 'The annual filing deadline is 30 November. I cannot find the signed board minutes for Q3.'),
      msg('compliance-2', 'Sofia', 'Tue 09:16', 'The draft minutes are in Drive, but two signatures are still missing.'),
      msg('compliance-3', 'Max', 'Tue 09:20', 'Please track the signatures and tell me if the filing date is at risk.'),
    ],
    summary: 'The annual filing has a known deadline, while Q3 board minutes remain unsigned.',
    proposal: { title: 'Track missing signatures before annual filing', description: 'Confirm the required signatories, request the missing signatures and update the compliance calendar with escalation dates.', missing: 'Names of missing signatories; final filing checklist.', priority: 'Medium', evidence: ['compliance-1', 'compliance-2', 'compliance-3'] },
  },
  {
    id: 'operations', company: 'mariner', title: 'Operations · Friday handoff', channel: 'Google Chat Space', level: 'open', role: null, unread: 0,
    messages: [
      msg('operations-1', 'Lena', 'Fri 16:01', 'The new label design is in the shared folder.'),
      msg('operations-2', 'Ravi', 'Fri 16:05', 'Thanks. I will check it on Monday.'),
      msg('operations-3', 'Lena', 'Fri 16:09', 'Have a good weekend everyone.'),
    ],
    summary: 'Routine handoff. No decision or actionable request detected.', proposal: null,
  },
  {
    id: 'lease', company: 'meridian', title: 'Strategy · Retail lease renewal', channel: 'Forwarded email', level: 'restricted', role: 'adviser', unread: 1,
    messages: [
      msg('lease-1', 'Landlord', 'Wed 08:42', 'We propose a 12% rent increase for the next three-year term.'),
      msg('lease-2', 'Kai', 'Wed 09:10', 'Footfall is improving, but this location is still below the original margin case.'),
      msg('lease-3', 'Max', 'Wed 09:28', 'Can we compare renewal, renegotiation and relocation before responding?'),
    ],
    summary: 'A landlord proposes higher rent at a location below its original margin case. Management needs options before responding.',
    proposal: { title: 'Review options for retail lease renewal', description: 'Compare renewal, renegotiation and relocation using expected sales, occupancy cost and transition risk.', missing: 'Current location P&L; relocation alternatives; renewal deadline.', priority: 'Medium', evidence: ['lease-1', 'lease-2', 'lease-3'] },
  },
  {
    id: 'payment', company: 'mariner', title: 'Treasury · Equipment deposit', channel: 'Google Chat Space', level: 'restricted', role: 'treasurer', unread: 2,
    messages: [
      msg('payment-1', 'Daniel', 'Thu 13:06', 'The equipment vendor asks for a $180k deposit today to secure the delivery slot.'),
      msg('payment-2', 'Amira', 'Thu 13:13', 'The amount is above my approval limit. I also cannot find the signed purchase order.'),
      msg('payment-3', 'Max', 'Thu 13:21', 'Hold the transfer. Please assemble the approval pack first.'),
    ],
    summary: 'A time-sensitive deposit exceeds an approval limit and lacks a signed purchase order. The owner has instructed the team to hold payment.',
    proposal: { title: 'Prepare approval pack for equipment deposit', description: 'Collect the purchase order, verify authority and summarize cash impact before any transfer is approved.', missing: 'Signed purchase order; vendor bank validation; cash impact.', priority: 'High', evidence: ['payment-1', 'payment-2', 'payment-3'] },
  },
];

export const liveChatTemplate = {
  id: 'live', company: 'pilot', title: 'Live Google Chat', channel: 'Connected group chat', level: 'internal', role: null, unread: 0,
  messages: [], summary: '', proposal: null, live: true,
};

export const initialTickets = [
  { id: 'TKT-1042', chatId: 'supplier', role: 'adviser', status: 'needs_review', createdAt: '12 Oct, 10:29' },
  { id: 'TKT-1041', chatId: 'cash', role: 'treasurer', status: 'needs_review', createdAt: '12 Oct, 09:32' },
  { id: 'TKT-1040', chatId: 'resolution', role: 'governance', status: 'needs_review', createdAt: '12 Oct, 11:36' },
  { id: 'TKT-1039', chatId: 'expansion', role: 'adviser', status: 'approved', createdAt: '11 Oct, 14:32', reviewedBy: 'Owner', reviewedAt: '12 Oct, 08:15' },
  { id: 'TKT-1038', chatId: 'payables', role: 'treasurer', status: 'needs_review', createdAt: '11 Oct, 16:42' },
  { id: 'TKT-1037', chatId: 'compliance', role: 'governance', status: 'needs_review', createdAt: '10 Oct, 09:21' },
  { id: 'TKT-1036', chatId: 'payment', role: 'treasurer', status: 'rejected', createdAt: '9 Oct, 13:22', reviewedBy: 'Owner', reviewedAt: '9 Oct, 14:10' },
].map((ticket) => {
  const chat = mockChats.find((item) => item.id === ticket.chatId);
  return { ...ticket, title: chat.proposal.title, description: chat.proposal.description, missing: chat.proposal.missing, priority: chat.proposal.priority, evidence: chat.proposal.evidence, summary: chat.summary };
});
