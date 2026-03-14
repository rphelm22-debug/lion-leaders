import { useMemo, useState } from 'react'
import {
  Search,
  Users,
  ShieldCheck,
  MessageSquare,
  BarChart3,
  Settings,
  Bell,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Clock3,
  Mail,
  X,
  UserPlus,
  FileText,
  CreditCard,
} from 'lucide-react'

function Button({ children, onClick, variant = 'primary', className = '', type = 'button' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${variant === 'outline' ? 'btn-outline' : 'btn-primary'} ${className}`.trim()}
    >
      {children}
    </button>
  )
}

function Card({ children, className = '' }) {
  return <div className={`card ${className}`.trim()}>{children}</div>
}

function CardHeader({ children, className = '' }) {
  return <div className={`card-header ${className}`.trim()}>{children}</div>
}

function CardTitle({ children, className = '' }) {
  return <h3 className={`card-title ${className}`.trim()}>{children}</h3>
}

function CardContent({ children, className = '' }) {
  return <div className={`card-content ${className}`.trim()}>{children}</div>
}

function Badge({ children, tone = 'default' }) {
  return <span className={`badge badge-${tone}`}>{children}</span>
}

export default function App() {
  const [view, setView] = useState('home')
  const [isInviteOpen, setIsInviteOpen] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [draftPrompt, setDraftPrompt] = useState('Removing a talented leader who undermines authority')
  const [draftResponse, setDraftResponse] = useState(`Diagnosis
This is not merely a talent issue. It is an authority and trust issue that will corrupt the chain of responsibility if left unaddressed.

Leadership Responsibility
A leader is required to protect the organization, not preserve high performance at the cost of integrity.

Recommended Action
Confront directly, document clearly, and make a final decision within a defined time horizon.`)
  const [candidateAnswer, setCandidateAnswer] = useState('')
  const [emailDraft, setEmailDraft] = useState('candidate@company.com')
  const [roleDraft, setRoleDraft] = useState('Regional Operations Director')

  const assessmentQuestions = useMemo(
    () => [
      'Describe a time you had to correct a high performer who was harming team trust. What did you do?',
      'When a leader above you makes a weak decision, how do you respond while honoring authority?',
      'A direct report repeatedly avoids accountability but is well liked. What action would you take?',
      'What is the responsibility of a leader when truth and harmony appear to conflict?',
      'How do you decide when patience becomes passivity?',
    ],
    []
  )

  const candidateDirectory = [
    { name: 'Michael Turner', email: 'mturner@example.com', role: 'Regional Operations Director', stage: 'Report Ready', invited: 'Mar 11' },
    { name: 'James Walker', email: 'jwalker@example.com', role: 'VP of Sales', stage: 'In Review', invited: 'Mar 12' },
    { name: 'Daniel Brooks', email: 'dbrooks@example.com', role: 'Plant Manager', stage: 'Invite Sent', invited: 'Mar 13' },
  ]

  const candidates = [
    { name: 'Michael Turner', role: 'Regional Operations Director', status: 'Completed', readiness: 'Yellow', risk: 'Fear of confrontation' },
    { name: 'James Walker', role: 'VP of Sales', status: 'In Review', readiness: 'Green', risk: 'Low risk' },
    { name: 'Daniel Brooks', role: 'Plant Manager', status: 'Awaiting Response', readiness: 'Pending', risk: 'Assessment not started' },
  ]

  const sessions = [
    { title: 'Removing a high-performing but divisive leader', tag: 'Authority', time: '2 hours ago' },
    { title: 'How to address passivity in a direct report', tag: 'Correction', time: 'Yesterday' },
    { title: 'Leading through rapid growth without loss of clarity', tag: 'Stewardship', time: '2 days ago' },
  ]

  const reports = [
    { label: 'Ready for authority', value: '6', tone: 'green' },
    { label: 'Qualified with conditions', value: '4', tone: 'yellow' },
    { label: 'Formation required', value: '3', tone: 'orange' },
    { label: 'Flagged for review', value: '2', tone: 'red' },
  ]

  const navItems = [
    { icon: BarChart3, label: 'Dashboard', key: 'dashboard' },
    { icon: Users, label: 'Candidates', key: 'candidates' },
    { icon: ShieldCheck, label: 'Assessments', key: 'assessment' },
    { icon: MessageSquare, label: 'Executive AI', key: 'executive' },
    { icon: Bell, label: 'Reports', key: 'report' },
    { icon: Settings, label: 'Settings', key: 'settings' },
  ]

  const totalQuestions = 20

  const runExecutiveAi = () => {
    const lower = draftPrompt.toLowerCase()
    if (lower.includes('authority') || lower.includes('undermin')) {
      setDraftResponse(`Diagnosis
This is not primarily a performance issue. It is an authority and trust issue. Left untouched, it will teach the organization that results excuse disorder.

Biblical / Moral Framing
Authority is stewardship, not ownership. A leader is responsible to preserve order, truth, and accountability.

Leadership Responsibility
You are required to address conduct that corrodes trust, even when the person is talented. Delay rewards disorder.

Recommended Action
Confront directly, define the breach clearly, document expectations, and set a short decision window for observable change.

Risk of Inaction
If delayed, the team will learn that high performance can purchase immunity from correction.`)
    } else if (lower.includes('fire') || lower.includes('remove')) {
      setDraftResponse(`Diagnosis
You are weighing whether continued employment is helping the organization or harming it. The core issue is stewardship, not comfort.

Biblical / Moral Framing
Mercy does not require tolerating ongoing harm. Justice and clarity are part of faithful leadership.

Leadership Responsibility
State the issue truthfully, act without malice, and protect the people under your care.

Recommended Action
Review facts, confirm prior correction steps, make the decision promptly, and communicate it with clarity.

Risk of Inaction
Unclear action weakens trust, extends confusion, and shifts the cost of leadership failure onto the team.`)
    } else {
      setDraftResponse(`Diagnosis
The issue requires distinguishing facts, motives, incentives, and stewardship duties before action.

Biblical / Moral Framing
Leadership decisions must be governed by truth, obedience, and faithful stewardship rather than fear or image management.

Leadership Responsibility
Name what is true, identify what duty exists, and act within a defined time horizon.

Recommended Action
Clarify the core problem, confront what must be confronted, delegate what should be delegated, and document the next step.

Risk of Inaction
Delay usually rewards disorder and teaches the team that responsibility can be avoided.`)
    }
  }

  return (
    <div className="app-shell">
      <div className="app-grid">
        <aside className="sidebar">
          <div className="brand-block">
            <div className="eyebrow">Lion Leaders</div>
            <div className="brand-title">Powered by telOS</div>
          </div>

          <nav className="nav-stack">
            {navItems.map((item) => {
              const Icon = item.icon
              const active = view === item.key
              return (
                <button key={item.label} onClick={() => setView(item.key)} className={`nav-btn ${active ? 'nav-btn-active' : ''}`}>
                  <Icon size={16} />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </nav>

          <div className="nav-stack secondary-nav">
            <button onClick={() => setView('team')} className="nav-btn nav-btn-secondary"><Users size={16} /> Team Management</button>
            <button onClick={() => setView('billing')} className="nav-btn nav-btn-secondary"><CreditCard size={16} /> Billing</button>
            <button onClick={() => setView('home')} className="nav-btn nav-btn-secondary"><ArrowRight size={16} /> Brand Home</button>
          </div>

          <Card>
            <CardContent>
              <div className="small-label">Current Plan</div>
              <div className="plan-title">Enterprise</div>
              <p className="muted">Candidate assessments, executive advisory, and leadership reporting for your organization.</p>
              <Button className="full-width" onClick={() => setView('billing')}>Manage Subscription</Button>
            </CardContent>
          </Card>
        </aside>

        <main className="main-content">
          {view === 'home' && (
            <div className="home-wrap">
              <div className="logo-frame">
                <img src="/command-stewardship-logo.png" alt="Command Stewardship logo" className="hero-logo" />
              </div>
              <div className="eyebrow wide">Command Stewardship</div>
              <h1 className="hero-title">Lion Leaders</h1>
              <p className="hero-motto">In Veritate et Virtute Fundamentum</p>
              <div className="hero-actions">
                <Button className="hero-btn" onClick={() => setView('dashboard')}>Enter Dashboard</Button>
                <Button variant="outline" className="hero-btn" onClick={() => setView('executive')}>Open Executive AI</Button>
              </div>
            </div>
          )}

          {view === 'dashboard' && (
            <>
              <div className="header-row">
                <div>
                  <div className="eyebrow">Company Dashboard</div>
                  <h1 className="page-title">Leadership intelligence for hiring and executive decision-making.</h1>
                </div>
                <div className="action-row">
                  <Button onClick={() => setIsInviteOpen(true)}>Invite Candidate</Button>
                  <Button variant="outline" onClick={() => setView('executive')}>Open Executive AI</Button>
                </div>
              </div>

              <div className="kpi-grid">
                {[
                  { label: 'Active Candidates', value: '18', note: '+4 this week', icon: Users },
                  { label: 'Completed Assessments', value: '11', note: '61% completion rate', icon: ShieldCheck },
                  { label: 'Executive AI Sessions', value: '42', note: '+9 this week', icon: MessageSquare },
                  { label: 'Leadership Risk Alerts', value: '3', note: 'Needs review today', icon: AlertTriangle },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <Card key={item.label}>
                      <CardContent>
                        <div className="kpi-head"><span className="muted small-label">{item.label}</span><Icon size={16} /></div>
                        <div className="kpi-value">{item.value}</div>
                        <div className="muted">{item.note}</div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              <div className="two-col-layout wide-left">
                <Card>
                  <CardHeader>
                    <div className="header-split">
                      <div>
                        <CardTitle>Candidate Assessment Pipeline</CardTitle>
                        <p className="muted">Track new hires, readiness status, and leadership risk indicators.</p>
                      </div>
                      <div className="search-pill"><Search size={16} /> Search candidates</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="table-wrap">
                      <div className="table-head five">
                        <div>Candidate</div><div>Role</div><div>Status</div><div>Readiness</div><div>Primary Risk</div>
                      </div>
                      {candidates.map((candidate) => (
                        <button key={candidate.name} onClick={() => setView('report')} className="table-row five">
                          <div className="row-strong">{candidate.name}</div>
                          <div className="muted">{candidate.role}</div>
                          <div className="muted">{candidate.status}</div>
                          <div>
                            <Badge tone={candidate.readiness === 'Green' ? 'green' : candidate.readiness === 'Yellow' ? 'yellow' : candidate.readiness === 'Pending' ? 'slate' : 'orange'}>{candidate.readiness}</Badge>
                          </div>
                          <div className="muted">{candidate.risk}</div>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Assessment Outcomes</CardTitle>
                    <p className="muted">Current readiness distribution across recent candidates.</p>
                  </CardHeader>
                  <CardContent>
                    <div className="stack-gap">
                      {reports.map((report) => (
                        <div key={report.label} className="stat-tile">
                          <span className="muted">{report.label}</span>
                          <span className={`stat-number stat-${report.tone}`}>{report.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="two-col-layout narrow-left">
                <Card>
                  <CardHeader>
                    <CardTitle>Executive AI Advisory</CardTitle>
                    <p className="muted">Submit a leadership situation and receive structured guidance.</p>
                  </CardHeader>
                  <CardContent>
                    <div className="stack-gap">
                      <input className="field" value={draftPrompt} readOnly />
                      <textarea className="field field-large" value={draftResponse} readOnly />
                      <div className="action-row">
                        <Button onClick={() => setView('executive')}>Ask telOS</Button>
                        <Button variant="outline">Save to History</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="stack-gap large-gap">
                  <Card>
                    <CardHeader><CardTitle>Recent Executive Sessions</CardTitle></CardHeader>
                    <CardContent>
                      <div className="stack-gap">
                        {sessions.map((session) => (
                          <button key={session.title} onClick={() => setView('executive')} className="list-card">
                            <div>
                              <div className="row-strong">{session.title}</div>
                              <div className="muted small-top">{session.time}</div>
                            </div>
                            <div className="list-right">
                              <Badge>{session.tag}</Badge>
                              <ArrowRight size={16} />
                            </div>
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader><CardTitle>Leadership Alerts</CardTitle></CardHeader>
                    <CardContent>
                      <div className="stack-gap">
                        <div className="alert alert-red"><AlertTriangle size={18} /><div><div className="row-strong">3 candidates flagged for authority posture concerns</div><div className="muted small-top">Review before advancing to final interviews.</div></div></div>
                        <div className="alert alert-yellow"><Clock3 size={18} /><div><div className="row-strong">2 executive advisory items remain unresolved</div><div className="muted small-top">Decisions delayed beyond recommended action windows.</div></div></div>
                        <div className="alert alert-green"><CheckCircle2 size={18} /><div><div className="row-strong">Formation check-ins improved across 4 leaders</div><div className="muted small-top">Decision clarity and accountability metrics are trending upward.</div></div></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </>
          )}

          {view === 'candidates' && (
            <div className="stack-gap large-gap">
              <div className="header-row">
                <div>
                  <div className="eyebrow">Candidates</div>
                  <h1 className="page-title">Candidate directory and invite status.</h1>
                  <p className="muted">Review candidate records, invite history, and progression into assessment reports.</p>
                </div>
                <div className="action-row">
                  <Button onClick={() => setIsInviteOpen(true)}>Invite New Candidate</Button>
                  <Button variant="outline" onClick={() => setView('dashboard')}>Back to Dashboard</Button>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Candidate List</CardTitle>
                  <p className="muted">This is the internal hiring queue for Lion Ridge Holdings.</p>
                </CardHeader>
                <CardContent>
                  <div className="table-wrap">
                    <div className="table-head five-candidates">
                      <div>Candidate</div><div>Email</div><div>Role</div><div>Stage</div><div>Invited</div>
                    </div>
                    {candidateDirectory.map((candidate) => (
                      <button key={candidate.email} onClick={() => setView(candidate.stage === 'Report Ready' ? 'report' : 'assessment')} className="table-row five-candidates">
                        <div className="row-strong">{candidate.name}</div>
                        <div className="muted">{candidate.email}</div>
                        <div className="muted">{candidate.role}</div>
                        <div><Badge>{candidate.stage}</Badge></div>
                        <div className="muted">{candidate.invited}</div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {view === 'assessment' && (
            <div className="content-narrow stack-gap large-gap">
              <div className="header-row">
                <div>
                  <div className="eyebrow">Lion Leaders Assessment</div>
                  <h1 className="page-title">Leadership Readiness Evaluation</h1>
                  <p className="muted">This assessment evaluates leadership posture, responsibility acceptance, authority dynamics, and decision-making under pressure.</p>
                </div>
                <Button variant="outline" onClick={() => setView('dashboard')}>Back to Dashboard</Button>
              </div>

              <Card>
                <CardHeader><CardTitle>Scenario Question</CardTitle></CardHeader>
                <CardContent>
                  <div className="stack-gap">
                    <p className="muted-light">{assessmentQuestions[currentQuestion]}</p>
                    <textarea className="field field-large" value={candidateAnswer} onChange={(e) => setCandidateAnswer(e.target.value)} placeholder="Describe how you would handle this situation..." />
                    <div className="split-actions">
                      <Button variant="outline" onClick={() => setCurrentQuestion((q) => Math.max(q - 1, 0))}>Previous</Button>
                      <div className="action-row">
                        <Button variant="outline" onClick={() => setView('report')}>Preview Report</Button>
                        <Button onClick={() => setCurrentQuestion((q) => Math.min(q + 1, assessmentQuestions.length - 1))}>Next Question</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Assessment Progress</CardTitle></CardHeader>
                <CardContent>
                  <div className="muted">Question {currentQuestion + 1} of {totalQuestions}</div>
                  <div className="progress-bar"><div className="progress-fill" style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }} /></div>
                </CardContent>
              </Card>
            </div>
          )}

          {view === 'report' && (
            <div className="content-wide stack-gap large-gap">
              <div className="header-row">
                <div>
                  <div className="eyebrow">Candidate Leadership Report</div>
                  <h1 className="page-title">Michael Turner</h1>
                  <p className="muted">Regional Operations Director Candidate</p>
                </div>
                <div className="action-row">
                  <Button variant="outline" onClick={() => setView('assessment')}>Back to Assessment</Button>
                  <Button onClick={() => setView('dashboard')}>Return to Dashboard</Button>
                </div>
              </div>

              <Card>
                <CardHeader><CardTitle>Leadership Readiness Score</CardTitle></CardHeader>
                <CardContent className="score-row">
                  <div className="score-value">Yellow</div>
                  <Badge tone="yellow">Qualified with Conditions</Badge>
                </CardContent>
              </Card>

              <div className="two-col-layout equal-cols">
                <Card>
                  <CardHeader><CardTitle>Strength Indicators</CardTitle></CardHeader>
                  <CardContent className="stack-gap muted">
                    <p>• Accepts responsibility for outcomes</p>
                    <p>• Demonstrates strategic thinking under pressure</p>
                    <p>• Willing to confront performance issues</p>
                    <p>• Strong operational ownership mindset</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle>Risk Indicators</CardTitle></CardHeader>
                  <CardContent className="stack-gap muted">
                    <p>• Avoids direct confrontation with peers</p>
                    <p>• Tendency to delay difficult personnel decisions</p>
                    <p>• Possible fear of relational fallout</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader><CardTitle>Authority Posture Analysis</CardTitle></CardHeader>
                <CardContent className="muted">The candidate demonstrates strong ownership of operational results but shows hesitation when confronting authority disruptions inside peer groups. In high-trust teams this may remain manageable, but under pressure environments the hesitation could erode leadership clarity if not corrected early.</CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>telOS Hiring Recommendation</CardTitle></CardHeader>
                <CardContent className="stack-gap muted">
                  <p>Candidate is likely capable of leadership responsibility but should receive early correction regarding confrontation discipline and authority protection.</p>
                  <p className="row-strong">Recommendation: Proceed with hire if mentorship and leadership accountability structures are clearly defined.</p>
                  <div className="action-row">
                    <Button>Download Report</Button>
                    <Button variant="outline">Share With Leadership</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {view === 'executive' && (
            <div className="two-col-layout narrow-left">
              <Card>
                <CardHeader>
                  <CardTitle>Executive AI Command Interface</CardTitle>
                  <p className="muted">Submit a leadership situation and receive structured guidance based on telOS doctrine.</p>
                </CardHeader>
                <CardContent>
                  <div className="stack-gap">
                    <input className="field" value={draftPrompt} onChange={(e) => setDraftPrompt(e.target.value)} />
                    <textarea className="field field-large" value={draftResponse} onChange={(e) => setDraftResponse(e.target.value)} />
                    <div className="action-row">
                      <Button onClick={runExecutiveAi}>Run telOS Analysis</Button>
                      <Button variant="outline" onClick={() => setView('dashboard')}>Back to Dashboard</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="stack-gap large-gap">
                <Card>
                  <CardHeader><CardTitle>Response Structure</CardTitle></CardHeader>
                  <CardContent className="stack-gap muted">
                    <p>• Diagnosis</p><p>• Biblical / Moral Framing</p><p>• Leadership Responsibility</p><p>• Recommended Action</p><p>• Risk of Inaction</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle>Suggested Prompts</CardTitle></CardHeader>
                  <CardContent>
                    <div className="stack-gap">
                      {['Should I remove a leader who undermines authority?','My team avoids accountability. What should I do?','How do I confront passivity in a direct report?'].map((prompt) => (
                        <button key={prompt} onClick={() => setDraftPrompt(prompt)} className="prompt-btn">{prompt}</button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {view === 'team' && (
            <div className="content-wide stack-gap large-gap">
              <div className="header-row">
                <div>
                  <div className="eyebrow">Team Management</div>
                  <h1 className="page-title">Company admins and executive users.</h1>
                  <p className="muted">Control who can invite candidates, review reports, and access executive AI.</p>
                </div>
                <Button>Add Team Member</Button>
              </div>

              <div className="two-col-layout equal-cols">
                {[
                  { name: 'Alexander Grant', role: 'Company Administrator', access: 'Full system access' },
                  { name: 'Charlotte Whitaker', role: 'Executive Leadership', access: 'Executive AI + reports' },
                  { name: 'Marcus Hale', role: 'Hiring Director', access: 'Candidates + reports' },
                  { name: 'Elena Brooks', role: 'Talent Operations', access: 'Invites + candidate pipeline' },
                ].map((member) => (
                  <Card key={member.name}>
                    <CardContent>
                      <div className="member-row">
                        <div>
                          <div className="row-strong">{member.name}</div>
                          <div className="muted small-top">{member.role}</div>
                          <div className="muted small-top">{member.access}</div>
                        </div>
                        <Badge>Active</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {view === 'billing' && (
            <div className="content-wide stack-gap large-gap">
              <div>
                <div className="eyebrow">Billing</div>
                <h1 className="page-title">Subscription and usage overview.</h1>
                <p className="muted">Track plan level, assessment volume, and executive AI usage for internal planning.</p>
              </div>
              <div className="kpi-grid three-cols">
                {[
                  { title: 'Plan', value: 'Enterprise' },
                  { title: 'Monthly Assessments', value: '50 included' },
                  { title: 'Executive AI Sessions', value: 'Unlimited' },
                ].map((item) => (
                  <Card key={item.title}><CardContent><div className="muted">{item.title}</div><div className="plan-title small-top">{item.value}</div></CardContent></Card>
                ))}
              </div>
            </div>
          )}

          {view === 'settings' && (
            <div className="content-wide stack-gap large-gap">
              <div>
                <div className="eyebrow">Settings</div>
                <h1 className="page-title">Internal Prototype Settings</h1>
                <p className="muted">This preview is for workflow validation only. Authentication, persistent storage, user permissions, and live AI calls are not wired yet.</p>
              </div>
              <div className="two-col-layout equal-cols">
                <Card>
                  <CardHeader><CardTitle>What is Live in This Prototype</CardTitle></CardHeader>
                  <CardContent className="stack-gap muted">
                    <p>• Clickable navigation between core product screens</p>
                    <p>• Interactive assessment question flow</p>
                    <p>• Editable executive AI prompt and response preview</p>
                    <p>• Internal usability review of layout and workflow</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle>Additional Internal Review Screens</CardTitle></CardHeader>
                  <CardContent>
                    <div className="stack-gap">
                      {[['Brand Home','home'],['Candidate List Page','candidates'],['Team Management','team'],['Billing Overview','billing']].map(([label,key]) => (
                        <button key={key} onClick={() => setView(key)} className="list-card"><span>{label}</span><ArrowRight size={16} /></button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {isInviteOpen && (
            <div className="modal-backdrop">
              <Card className="modal-card">
                <CardHeader>
                  <div className="header-split">
                    <div>
                      <CardTitle>Invite Candidate</CardTitle>
                      <p className="muted">Send a secure assessment link for leadership evaluation.</p>
                    </div>
                    <button onClick={() => setIsInviteOpen(false)} className="icon-btn"><X size={16} /></button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="stack-gap">
                    <div>
                      <div className="muted small-label">Candidate Email</div>
                      <div className="input-icon-wrap"><Mail size={16} className="input-icon" /><input className="field pad-left" value={emailDraft} onChange={(e) => setEmailDraft(e.target.value)} /></div>
                    </div>
                    <div>
                      <div className="muted small-label">Role Being Evaluated</div>
                      <div className="input-icon-wrap"><FileText size={16} className="input-icon" /><input className="field pad-left" value={roleDraft} onChange={(e) => setRoleDraft(e.target.value)} /></div>
                    </div>
                    <div className="callout muted">The candidate will receive a secure invitation to complete the telOS leadership readiness assessment.</div>
                    <div className="action-row">
                      <Button onClick={() => { setIsInviteOpen(false); setView('candidates') }}><UserPlus size={16} style={{ marginRight: 8 }} />Send Invite</Button>
                      <Button variant="outline" onClick={() => setIsInviteOpen(false)}>Cancel</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
