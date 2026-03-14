import { useMemo, useState } from "react";
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
} from "lucide-react";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Card({ className = "", children }) {
  return <div className={cx("rounded-3xl border", className)}>{children}</div>;
}

function CardHeader({ className = "", children }) {
  return <div className={cx("p-6 pb-4", className)}>{children}</div>;
}

function CardTitle({ className = "", children }) {
  return <h3 className={cx("text-lg font-semibold", className)}>{children}</h3>;
}

function CardContent({ className = "", children }) {
  return <div className={cx("p-6 pt-0", className)}>{children}</div>;
}

function Button({
  className = "",
  children,
  variant = "default",
  onClick,
  type = "button",
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-medium transition";
  const styles =
    variant === "outline"
      ? "border border-[#b89f88] bg-transparent text-[#e8dccf] hover:bg-white/5"
      : "bg-[#d1b89d] text-black hover:bg-[#e0c8af]";
  return (
    <button type={type} onClick={onClick} className={cx(base, styles, className)}>
      {children}
    </button>
  );
}

function Badge({ className = "", children }) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        className
      )}
    >
      {children}
    </span>
  );
}

function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={cx(
        "w-full rounded-2xl border border-white/10 bg-[#1f1b19] px-4 py-3 text-sm text-[#efe5da] outline-none placeholder:text-[#8f857d]",
        className
      )}
    />
  );
}

function Textarea({ className = "", ...props }) {
  return (
    <textarea
      {...props}
      className={cx(
        "w-full rounded-2xl border border-white/10 bg-[#1f1b19] px-4 py-3 text-sm text-[#efe5da] outline-none placeholder:text-[#8f857d]",
        className
      )}
    />
  );
}

export default function App() {
  const [view, setView] = useState("home");
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [draftPrompt, setDraftPrompt] = useState(
    "Removing a talented leader who undermines authority"
  );
  const [draftResponse, setDraftResponse] = useState(`Diagnosis
This is not merely a talent issue. It is an authority and trust issue that will corrupt the chain of responsibility if left unaddressed.

Leadership Responsibility
A leader is required to protect the organization, not preserve high performance at the cost of integrity.

Recommended Action
Confront directly, document clearly, and make a final decision within a defined time horizon.`);
  const [candidateAnswer, setCandidateAnswer] = useState("");
  const [emailDraft, setEmailDraft] = useState("candidate@company.com");
  const [roleDraft, setRoleDraft] = useState("Regional Operations Director");

  const logoSrc = "/command-stewardship-logo.png";

  const assessmentQuestions = useMemo(
    () => [
      "Describe a time you had to correct a high performer who was harming team trust. What did you do?",
      "When a leader above you makes a weak decision, how do you respond while honoring authority?",
      "A direct report repeatedly avoids accountability but is well liked. What action would you take?",
      "What is the responsibility of a leader when truth and harmony appear to conflict?",
      "How do you decide when patience becomes passivity?",
    ],
    []
  );

  const totalQuestions = 20;

  const nextQuestion = () => {
    setCurrentQuestion((q) => Math.min(q + 1, assessmentQuestions.length - 1));
  };

  const prevQuestion = () => {
    setCurrentQuestion((q) => Math.max(q - 1, 0));
  };

  const runExecutiveAi = () => {
    const lower = draftPrompt.toLowerCase();

    if (lower.includes("authority") || lower.includes("undermin")) {
      setDraftResponse(`Diagnosis
This is not primarily a performance issue. It is an authority and trust issue. Left untouched, it will teach the organization that results excuse disorder.

Biblical / Moral Framing
Authority is stewardship, not ownership. A leader is responsible to preserve order, truth, and accountability.

Leadership Responsibility
You are required to address conduct that corrodes trust, even when the person is talented. Delay rewards disorder.

Recommended Action
Confront directly, define the breach clearly, document expectations, and set a short decision window for observable change.

Risk of Inaction
If delayed, the team will learn that high performance can purchase immunity from correction.`);
    } else if (lower.includes("fire") || lower.includes("remove")) {
      setDraftResponse(`Diagnosis
You are weighing whether continued employment is helping the organization or harming it. The core issue is stewardship, not comfort.

Biblical / Moral Framing
Mercy does not require tolerating ongoing harm. Justice and clarity are part of faithful leadership.

Leadership Responsibility
State the issue truthfully, act without malice, and protect the people under your care.

Recommended Action
Review facts, confirm prior correction steps, make the decision promptly, and communicate it with clarity.

Risk of Inaction
Unclear action weakens trust, extends confusion, and shifts the cost of leadership failure onto the team.`);
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
Delay usually rewards disorder and teaches the team that responsibility can be avoided.`);
    }
  };

  const sendInvite = () => {
    setIsInviteOpen(false);
    setView("candidates");
  };

  const candidateDirectory = [
    {
      name: "Michael Turner",
      email: "mturner@example.com",
      role: "Regional Operations Director",
      stage: "Report Ready",
      invited: "Mar 11",
    },
    {
      name: "James Walker",
      email: "jwalker@example.com",
      role: "VP of Sales",
      stage: "In Review",
      invited: "Mar 12",
    },
    {
      name: "Daniel Brooks",
      email: "dbrooks@example.com",
      role: "Plant Manager",
      stage: "Invite Sent",
      invited: "Mar 13",
    },
  ];

  const candidates = [
    {
      name: "Michael Turner",
      role: "Regional Operations Director",
      status: "Completed",
      readiness: "Yellow",
      risk: "Fear of confrontation",
    },
    {
      name: "James Walker",
      role: "VP of Sales",
      status: "In Review",
      readiness: "Green",
      risk: "Low risk",
    },
    {
      name: "Daniel Brooks",
      role: "Plant Manager",
      status: "Awaiting Response",
      readiness: "Pending",
      risk: "Assessment not started",
    },
  ];

  const sessions = [
    {
      title: "Removing a high-performing but divisive leader",
      tag: "Authority",
      time: "2 hours ago",
    },
    {
      title: "How to address passivity in a direct report",
      tag: "Correction",
      time: "Yesterday",
    },
    {
      title: "Leading through rapid growth without loss of clarity",
      tag: "Stewardship",
      time: "2 days ago",
    },
  ];

  const reports = [
    { label: "Ready for authority", value: "6", tone: "text-emerald-300" },
    { label: "Qualified with conditions", value: "4", tone: "text-amber-300" },
    { label: "Formation required", value: "3", tone: "text-orange-300" },
    { label: "Flagged for review", value: "2", tone: "text-red-300" },
  ];

  const navItems = [
    { icon: BarChart3, label: "Dashboard", key: "dashboard" },
    { icon: Users, label: "Candidates", key: "candidates" },
    { icon: ShieldCheck, label: "Assessments", key: "assessment" },
    { icon: MessageSquare, label: "Executive AI", key: "executive" },
    { icon: Bell, label: "Reports", key: "report" },
    { icon: Settings, label: "Settings", key: "settings" },
  ];

  return (
    <div className="min-h-screen bg-[#221f1d] text-[#efe5da]">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="border-r border-white/10 bg-[#1b1816] p-6">
          <div className="mb-10">
            <div className="text-sm uppercase tracking-[0.3em] text-[#c8b39d]">
              Lion Leaders
            </div>
            <div className="mt-2 text-2xl font-semibold">Powered by telOS</div>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = view === item.key;
              return (
                <button
                  key={item.label}
                  onClick={() => setView(item.key)}
                  className={cx(
                    "flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm transition",
                    active
                      ? "bg-[#d1b89d] text-black"
                      : "text-[#cbbfb4] hover:bg-white/5"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-8 grid gap-3">
            <button
              onClick={() => setView("team")}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-[#cbbfb4] hover:bg-white/10"
            >
              <Users className="h-4 w-4" /> Team Management
            </button>
            <button
              onClick={() => setView("billing")}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-[#cbbfb4] hover:bg-white/10"
            >
              <CreditCard className="h-4 w-4" /> Billing
            </button>
            <button
              onClick={() => setView("home")}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-[#cbbfb4] hover:bg-white/10"
            >
              <ArrowRight className="h-4 w-4" /> Brand Home
            </button>
          </div>

          <Card className="mt-10 border-white/10 bg-[#282320] text-[#efe5da]">
            <CardContent className="p-5">
              <div className="text-sm font-medium text-[#d8c8b7]">Current Plan</div>
              <div className="mt-2 text-xl font-semibold">Enterprise</div>
              <p className="mt-3 text-sm leading-6 text-[#c5b9af]">
                Candidate assessments, executive advisory, and leadership reporting
                for your organization.
              </p>
              <Button className="mt-5 w-full" onClick={() => setView("billing")}>
                Manage Subscription
              </Button>
            </CardContent>
          </Card>
        </aside>

        <main className="relative p-6 md:p-8">
          {view === "home" && (
            <div className="mx-auto flex min-h-[85vh] max-w-5xl flex-col items-center justify-center text-center">
              <div className="w-full max-w-[560px] overflow-hidden rounded-3xl border border-[#d1b89d]/15 bg-[#151311] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] md:p-10">
                <img
                  src={logoSrc}
                  alt="Command Stewardship logo"
                  className="mx-auto w-full max-w-[420px] rounded-2xl object-contain"
                />
              </div>

              <div className="mt-10 text-sm uppercase tracking-[0.45em] text-[#c8b39d]">
                Command Stewardship
              </div>

              <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
                Lion Leaders
              </h1>

              <p className="mt-6 max-w-2xl text-2xl italic text-[#e7d8c6] md:text-3xl">
                In Veritate et Virtute Fundamentum
              </p>

              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <Button
                  className="px-8 py-6 text-lg"
                  onClick={() => setView("dashboard")}
                >
                  Enter Dashboard
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-6 text-lg"
                  onClick={() => setView("executive")}
                >
                  Open Executive AI
                </Button>
              </div>
            </div>
          )}

          {view === "dashboard" && (
            <>
              <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.25em] text-[#bca998]">
                    Company Dashboard
                  </div>
                  <h1 className="mt-2 text-3xl font-semibold md:text-4xl">
                    Leadership intelligence for hiring and executive decision-making.
                  </h1>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button onClick={() => setIsInviteOpen(true)}>
                    Invite Candidate
                  </Button>
                  <Button variant="outline" onClick={() => setView("executive")}>
                    Open Executive AI
                  </Button>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {[
                  { label: "Active Candidates", value: "18", note: "+4 this week", icon: Users },
                  { label: "Completed Assessments", value: "11", note: "61% completion rate", icon: ShieldCheck },
                  { label: "Executive AI Sessions", value: "42", note: "+9 this week", icon: MessageSquare },
                  { label: "Leadership Risk Alerts", value: "3", note: "Needs review today", icon: AlertTriangle },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <Card key={item.label} className="border-white/10 bg-[#2a2522] text-[#efe5da]">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-[#cbbfb4]">{item.label}</div>
                          <Icon className="h-4 w-4 text-[#d1b89d]" />
                        </div>
                        <div className="mt-4 text-4xl font-semibold">{item.value}</div>
                        <div className="mt-2 text-sm text-[#bcaea1]">{item.note}</div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
                <Card className="border-white/10 bg-[#2a2522] text-[#efe5da]">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl">Candidate Assessment Pipeline</CardTitle>
                        <p className="mt-2 text-sm text-[#c1b5aa]">
                          Track new hires, readiness status, and leadership risk indicators.
                        </p>
                      </div>
                      <div className="hidden rounded-2xl border border-white/10 bg-white/5 px-3 py-2 md:flex md:items-center md:gap-2">
                        <Search className="h-4 w-4 text-[#d1b89d]" />
                        <span className="text-sm text-[#bcaea1]">Search candidates</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-hidden rounded-2xl border border-white/10">
                      <div className="grid grid-cols-[1.3fr_1fr_0.8fr_0.7fr_1fr] bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.2em] text-[#bcaea1]">
                        <div>Candidate</div>
                        <div>Role</div>
                        <div>Status</div>
                        <div>Readiness</div>
                        <div>Primary Risk</div>
                      </div>

                      {candidates.map((candidate) => (
                        <button
                          key={candidate.name}
                          onClick={() => setView("report")}
                          className="grid w-full grid-cols-[1.3fr_1fr_0.8fr_0.7fr_1fr] items-center border-t border-white/10 px-4 py-4 text-left text-sm hover:bg-white/5"
                        >
                          <div className="font-medium">{candidate.name}</div>
                          <div className="text-[#cbbfb4]">{candidate.role}</div>
                          <div className="text-[#cbbfb4]">{candidate.status}</div>
                          <div>
                            <Badge
                              className={
                                candidate.readiness === "Green"
                                  ? "bg-emerald-500/20 text-emerald-200"
                                  : candidate.readiness === "Yellow"
                                  ? "bg-amber-500/20 text-amber-200"
                                  : candidate.readiness === "Pending"
                                  ? "bg-slate-500/20 text-slate-200"
                                  : "bg-orange-500/20 text-orange-200"
                              }
                            >
                              {candidate.readiness}
                            </Badge>
                          </div>
                          <div className="text-[#cbbfb4]">{candidate.risk}</div>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-white/10 bg-[#2a2522] text-[#efe5da]">
                  <CardHeader>
                    <CardTitle className="text-xl">Assessment Outcomes</CardTitle>
                    <p className="text-sm text-[#c1b5aa]">
                      Current readiness distribution across recent candidates.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {reports.map((report) => (
                      <div key={report.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-[#cbbfb4]">{report.label}</div>
                          <div className={cx("text-2xl font-semibold", report.tone)}>
                            {report.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
                <Card className="border-white/10 bg-[#2a2522] text-[#efe5da]">
                  <CardHeader>
                    <CardTitle className="text-xl">Executive AI Advisory</CardTitle>
                    <p className="text-sm text-[#c1b5aa]">
                      Submit a leadership situation and receive structured guidance.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Input value={draftPrompt} readOnly />
                      <Textarea value={draftResponse} readOnly className="min-h-[240px]" />
                      <div className="flex gap-3">
                        <Button onClick={() => setView("executive")}>Ask telOS</Button>
                        <Button variant="outline">Save to History</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid gap-6">
                  <Card className="border-white/10 bg-[#2a2522] text-[#efe5da]">
                    <CardHeader>
                      <CardTitle className="text-xl">Recent Executive Sessions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {sessions.map((session) => (
                        <button
                          key={session.title}
                          onClick={() => setView("executive")}
                          className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-left"
                        >
                          <div>
                            <div className="font-medium">{session.title}</div>
                            <div className="mt-1 text-sm text-[#bcaea1]">{session.time}</div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge className="bg-[#d1b89d]/15 text-[#ebd8c5]">{session.tag}</Badge>
                            <ArrowRight className="h-4 w-4 text-[#d1b89d]" />
                          </div>
                        </button>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="border-white/10 bg-[#2a2522] text-[#efe5da]">
                    <CardHeader>
                      <CardTitle className="text-xl">Leadership Alerts</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3 rounded-2xl border border-red-500/20 bg-red-500/10 p-4">
                        <AlertTriangle className="mt-0.5 h-5 w-5 text-red-300" />
                        <div>
                          <div className="font-medium">3 candidates flagged for authority posture concerns</div>
                          <div className="mt-1 text-sm text-[#d8c7bf]">Review before advancing to final interviews.</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 rounded-2xl border border-amber-500/20 bg-amber-500/10 p-4">
                        <Clock3 className="mt-0.5 h-5 w-5 text-amber-300" />
                        <div>
                          <div className="font-medium">2 executive advisory items remain unresolved</div>
                          <div className="mt-1 text-sm text-[#d8c7bf]">Decisions delayed beyond recommended action windows.</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-300" />
                        <div>
                          <div className="font-medium">Formation check-ins improved across 4 leaders</div>
                          <div className="mt-1 text-sm text-[#d8c7bf]">Decision clarity and accountability metrics are trending upward.</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </>
          )}

          {view === "candidates" && (
            <div className="space-y-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.3em] text-[#c8b39d]">Candidates</div>
                  <h1 className="mt-2 text-3xl font-semibold">Candidate directory and invite status.</h1>
                  <p className="mt-3 text-[#cbbfb4]">
                    Review candidate records, invite history, and progression into assessment reports.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button onClick={() => setIsInviteOpen(true)}>Invite New Candidate</Button>
                  <Button variant="outline" onClick={() => setView("dashboard")}>
                    Back to Dashboard
                  </Button>
                </div>
              </div>

              <Card className="border-white/10 bg-[#2a2522] text-[#efe5da]">
                <CardHeader>
                  <CardTitle className="text-xl">Candidate List</CardTitle>
                  <p className="text-sm text-[#c1b5aa]">
                    This is the internal hiring queue for Lion Ridge Holdings.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="overflow-hidden rounded-2xl border border-white/10">
                    <div className="grid grid-cols-[1.1fr_1.2fr_1.1fr_0.8fr_0.8fr] bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.2em] text-[#bcaea1]">
                      <div>Candidate</div>
                      <div>Email</div>
                      <div>Role</div>
                      <div>Stage</div>
                      <div>Invited</div>
                    </div>
                    {candidateDirectory.map((candidate) => (
                      <button
                        key={candidate.email}
                        onClick={() => setView(candidate.stage === "Report Ready" ? "report" : "assessment")}
                        className="grid w-full grid-cols-[1.1fr_1.2fr_1.1fr_0.8fr_0.8fr] border-t border-white/10 px-4 py-4 text-left text-sm hover:bg-white/5"
                      >
                        <div className="font-medium">{candidate.name}</div>
                        <div className="text-[#cbbfb4]">{candidate.email}</div>
                        <div className="text-[#cbbfb4]">{candidate.role}</div>
                        <div>
                          <Badge className="bg-[#d1b89d]/15 text-[#ebd8c5]">{candidate.stage}</Badge>
                        </div>
                        <div className="text-[#cbbfb4]">{candidate.invited}</div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {view === "assessment" && (
            <div className="max-w-4xl space-y-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm uppercase tracking-[0.3em] text-[#c8b39d]">Lion Leaders Assessment</div>
                  <h1 className="mt-2 text-3xl font-semibold">Leadership Readiness Evaluation</h1>
                  <p className="mt-3 text-[#cbbfb4]">
                    This assessment evaluates leadership posture, responsibility acceptance, authority dynamics, and decision-making under pressure.
                  </p>
                </div>
                <Button variant="outline" onClick={() => setView("dashboard")}>
                  Back to Dashboard
                </Button>
              </div>

              <Card className="border-white/10 bg-[#2a2522] text-[#efe5da]">
                <CardHeader>
                  <CardTitle>Scenario Question</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <p className="text-[#d8c7bf]">{assessmentQuestions[currentQuestion]}</p>
                  <Textarea
                    value={candidateAnswer}
                    onChange={(e) => setCandidateAnswer(e.target.value)}
                    placeholder="Describe how you would handle this situation..."
                    className="min-h-[180px]"
                  />
                  <div className="flex justify-between">
                    <Button variant="outline" onClick={prevQuestion}>
                      Previous
                    </Button>
                    <div className="flex gap-3">
                      <Button variant="outline" onClick={() => setView("report")}>
                        Preview Report
                      </Button>
                      <Button onClick={nextQuestion}>Next Question</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-[#2a2522] text-[#efe5da]">
                <CardHeader>
                  <CardTitle>Assessment Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-[#cbbfb4]">
                    Question {currentQuestion + 1} of {totalQuestions}
                  </div>
                  <div className="mt-3 h-2 w-full rounded-full bg-[#1f1b19]">
                    <div
                      className="h-2 rounded-full bg-[#d1b89d]"
                      style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {view === "report" && (
            <div className="max-w-5xl space-y-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm uppercase tracking-[0.3em] text-[#c8b39d]">Candidate Leadership Report</div>
                  <h1 className="mt-2 text-3xl font-semibold">Michael Turner</h1>
                  <p className="mt-2 text-[#cbbfb4]">Regional Operations Director Candidate</p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setView("assessment")}>
                    Back to Assessment
                  </Button>
                  <Button onClick={() => setView("dashboard")}>Return to Dashboard</Button>
                </div>
              </div>

              <Card className="border-white/10 bg-[#2a2522] text-[#efe5da]">
                <CardHeader>
                  <CardTitle>Leadership Readiness Score</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <div className="text-5xl font-semibold text-amber-300">Yellow</div>
                  <Badge className="bg-amber-500/20 text-amber-200">Qualified with Conditions</Badge>
                </CardContent>
              </Card>

              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-white/10 bg-[#2a2522] text-[#efe5da]">
                  <CardHeader>
                    <CardTitle>Strength Indicators</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-[#cbbfb4]">
                    <p>• Accepts responsibility for outcomes</p>
                    <p>• Demonstrates strategic thinking under pressure</p>
                    <p>• Willing to confront performance issues</p>
                    <p>• Strong operational ownership mindset</p>
                  </CardContent>
                </Card>
                <Card className="border-white/10 bg-[#2a2522] text-[#efe5da]">
                  <CardHeader>
                    <CardTitle>Risk Indicators</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-[#cbbfb4]">
                    <p>• Avoids direct confrontation with peers</p>
                    <p>• Tendency to delay difficult personnel decisions</p>
                    <p>• Possible fear of relational fallout</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-white/10 bg-[#2a2522] text-[#efe5da]">
                <CardHeader>
                  <CardTitle>Authority Posture Analysis</CardTitle>
                </CardHeader>
                <CardContent className="leading-relaxed text-[#cbbfb4]">
                  The candidate demonstrates strong ownership of operational results but shows hesitation when confronting authority disruptions inside peer groups. In high-trust teams this may remain manageable, but under pressure environments the hesitation could erode leadership clarity if not corrected early.
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-[#2a2522] text-[#efe5da]">
                <CardHeader>
                  <CardTitle>telOS Hiring Recommendation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-[#cbbfb4]">
                  <p>
                    Candidate is likely capable of leadership responsibility but should receive early correction regarding confrontation discipline and authority protection.
                  </p>
                  <p className="font-medium text-[#efe5da]">
                    Recommendation: Proceed with hire if mentorship and leadership accountability structures are clearly defined.
                  </p>
                  <div className="flex gap-3 pt-2">
                    <Button>Download Report</Button>
                    <Button variant="outline">Share With Leadership</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {view === "executive" && (
            <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
              <Card className="border-white/10 bg-[#2a2522] text-[#efe5da]">
                <CardHeader>
                  <CardTitle className="text-xl">Executive AI Command Interface</CardTitle>
                  <p className="text-sm text-[#c1b5aa]">
                    Submit a leadership situation and receive structured guidance based on telOS doctrine.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input value={draftPrompt} onChange={(e) => setDraftPrompt(e.target.value)} />
                  <Textarea
                    value={draftResponse}
                    onChange={(e) => setDraftResponse(e.target.value)}
                    className="min-h-[320px]"
                  />
                  <div className="flex gap-3">
                    <Button onClick={runExecutiveAi}>Run telOS Analysis</Button>
                    <Button variant="outline" onClick={() => setView("dashboard")}>
                      Back to Dashboard
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6">
                <Card className="border-white/10 bg-[#2a2522] text-[#efe5da]">
                  <CardHeader>
                    <CardTitle className="text-xl">Response Structure</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-[#cbbfb4]">
                    <p>• Diagnosis</p>
                    <p>• Biblical / Moral Framing</p>
                    <p>• Leadership Responsibility</p>
                    <p>• Recommended Action</p>
                    <p>• Risk of Inaction</p>
                  </CardContent>
                </Card>

                <Card className="border-white/10 bg-[#2a2522] text-[#efe5da]">
                  <CardHeader>
                    <CardTitle className="text-xl">Suggested Prompts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      "Should I remove a leader who undermines authority?",
                      "My team avoids accountability. What should I do?",
                      "How do I confront passivity in a direct report?",
                    ].map((prompt) => (
                      <button
                        key={prompt}
                        onClick={() => setDraftPrompt(prompt)}
                        className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-left text-sm text-[#d8c7bf] hover:bg-white/10"
                      >
                        {prompt}
                      </button>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {view === "team" && (
            <div className="max-w-5xl space-y-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.3em] text-[#c8b39d]">Team Management</div>
                  <h1 className="mt-2 text-3xl font-semibold">Company admins and executive users.</h1>
                  <p className="mt-3 text-[#cbbfb4]">
                    Control who can invite candidates, review reports, and access executive AI.
                  </p>
                </div>
                <Button>Add Team Member</Button>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  { name: "Alexander Grant", role: "Company Administrator", access: "Full system access" },
                  { name: "Charlotte Whitaker", role: "Executive Leadership", access: "Executive AI + reports" },
                  { name: "Marcus Hale", role: "Hiring Director", access: "Candidates + reports" },
                  { name: "Elena Brooks", role: "Talent Operations", access: "Invites + candidate pipeline" },
                ].map((member) => (
                  <Card key={member.name} className="border-white/10 bg-[#2a2522] text-[#efe5da]">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="font-medium">{member.name}</div>
                          <div className="mt-1 text-sm text-[#cbbfb4]">{member.role}</div>
                          <div className="mt-3 text-sm text-[#bcaea1]">{member.access}</div>
                        </div>
                        <Badge className="bg-[#d1b89d]/15 text-[#ebd8c5]">Active</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {view === "billing" && (
            <div className="max-w-4xl space-y-6">
              <div>
                <div className="text-sm uppercase tracking-[0.3em] text-[#c8b39d]">Billing</div>
                <h1 className="mt-2 text-3xl font-semibold">Subscription and usage overview.</h1>
                <p className="mt-3 text-[#cbbfb4]">
                  Track plan level, assessment volume, and executive AI usage for internal planning.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  { title: "Plan", value: "Enterprise" },
                  { title: "Monthly Assessments", value: "50 included" },
                  { title: "Executive AI Sessions", value: "Unlimited" },
                ].map((item) => (
                  <Card key={item.title} className="border-white/10 bg-[#2a2522] text-[#efe5da]">
                    <CardContent className="p-6">
                      <div className="text-sm text-[#cbbfb4]">{item.title}</div>
                      <div className="mt-3 text-2xl font-semibold">{item.value}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {view === "settings" && (
            <div className="max-w-5xl space-y-6">
              <div>
                <div className="text-sm uppercase tracking-[0.3em] text-[#c8b39d]">Settings</div>
                <h1 className="mt-2 text-3xl font-semibold">Internal Prototype Settings</h1>
                <p className="mt-3 text-[#cbbfb4]">
                  This preview is for workflow validation only. Authentication, persistent storage, user permissions, and live AI calls are not wired yet.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-white/10 bg-[#2a2522] text-[#efe5da]">
                  <CardHeader>
                    <CardTitle>What is Live in This Prototype</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-[#cbbfb4]">
                    <p>• Clickable navigation between core product screens</p>
                    <p>• Interactive assessment question flow</p>
                    <p>• Editable executive AI prompt and response preview</p>
                    <p>• Internal usability review of layout and workflow</p>
                  </CardContent>
                </Card>
                <Card className="border-white/10 bg-[#2a2522] text-[#efe5da]">
                  <CardHeader>
                    <CardTitle>Additional Internal Review Screens</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-[#cbbfb4]">
                    <button onClick={() => setView("home")} className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-left hover:bg-white/10"><span>Brand Home</span><ArrowRight className="h-4 w-4 text-[#d1b89d]" /></button>
                    <button onClick={() => setView("candidates")} className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-left hover:bg-white/10"><span>Candidate List Page</span><ArrowRight className="h-4 w-4 text-[#d1b89d]" /></button>
                    <button onClick={() => setView("team")} className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-left hover:bg-white/10"><span>Team Management</span><ArrowRight className="h-4 w-4 text-[#d1b89d]" /></button>
                    <button onClick={() => setView("billing")} className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-left hover:bg-white/10"><span>Billing Overview</span><ArrowRight className="h-4 w-4 text-[#d1b89d]" /></button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {isInviteOpen && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/55 p-6">
              <Card className="w-full max-w-xl border-white/10 bg-[#2a2522] text-[#efe5da] shadow-2xl">
                <CardHeader>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl">Invite Candidate</CardTitle>
                      <p className="mt-2 text-sm text-[#c1b5aa]">
                        Send a secure assessment link for leadership evaluation.
                      </p>
                    </div>
                    <button onClick={() => setIsInviteOpen(false)} className="rounded-xl border border-white/10 p-2 hover:bg-white/5">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm text-[#cbbfb4]">Candidate Email</div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#bcaea1]" />
                      <Input value={emailDraft} onChange={(e) => setEmailDraft(e.target.value)} className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-[#cbbfb4]">Role Being Evaluated</div>
                    <div className="relative">
                      <FileText className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#bcaea1]" />
                      <Input value={roleDraft} onChange={(e) => setRoleDraft(e.target.value)} className="pl-10" />
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-[#cbbfb4]">
                    The candidate will receive a secure invitation to complete the telOS leadership readiness assessment.
                  </div>
                  <div className="flex gap-3">
                    <Button onClick={sendInvite}>
                      <UserPlus className="mr-2 h-4 w-4" />
                      Send Invite
                    </Button>
                    <Button variant="outline" onClick={() => setIsInviteOpen(false)}>
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
