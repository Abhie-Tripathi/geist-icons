"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import {
  Accessibility,
  AccessibilityUnread,
  AcronymApi,
  AcronymCsv,
  AcronymGif,
  AcronymHttp,
  AcronymIsr,
  AcronymJpg,
  AcronymJs,
  AcronymJson,
  AcronymMarkdown,
  AcronymPage,
  AcronymPpr,
  AcronymSvg,
  AcronymTs,
  AlignmentCenter,
  AlignmentLeft,
  AlignmentRight,
  Alpha,
  Analytics,
  Anchor,
  Api,
  Archive,
  ArrowCircleDown,
  ArrowCircleLeft,
  ArrowCircleRight,
  ArrowCircleUp,
  ArrowCrossed,
  ArrowDown,
  ArrowDownLeft,
  ArrowDownRight,
  ArrowGlobe,
  ArrowLeft,
  ArrowLeftRight,
  ArrowMove,
  ArrowMoveUnread,
  ArrowRight,
  ArrowUp,
  ArrowUpDiagonalScale,
  ArrowUpDown,
  ArrowUpLeft,
  ArrowUpRight,
  ArrowUpRightSmall,
  Backspace,
  BarChart,
  Bell,
  BellOff,
  BlendMode,
  Blob,
  BookClosed,
  Bookmark,
  BookOpen,
  Box,
  BranchMinus,
  BranchPlus,
  Briefcase,
  BrowserArc,
  BrowserBrave,
  BrowserChrome,
  BrowserEdge,
  BrowserFirefox,
  BrowserOpera,
  BrowserSafari,
  Bug,
  Buildings,
  Calculator,
  Calendar,
  Camera,
  Cart,
  ChartActivity,
  ChartBarMiddle,
  ChartBarPeak,
  ChartBarRandom,
  ChartPie,
  ChartTrendingDown,
  ChartTrendingUp,
  Check,
  CheckCircle,
  CheckCircleFill,
  CheckSquare,
  ChevronCircleDown,
  ChevronCircleDownFill,
  ChevronCircleLeft,
  ChevronCircleLeftFill,
  ChevronCircleRight,
  ChevronCircleRightFill,
  ChevronCircleUp,
  ChevronCircleUpFill,
  ChevronDoubleDown,
  ChevronDoubleLeft,
  ChevronDoubleRight,
  ChevronDoubleUp,
  ChevronDown,
  ChevronDownSmall,
  ChevronLeft,
  ChevronLeftSmall,
  ChevronRight,
  ChevronRightSmall,
  ChevronUp,
  ChevronUpSmall,
  Clipboard,
  Clock,
  ClockDashed,
  ClockRewind,
  ClockSmall,
  ClosedCaptions,
  Cloud,
  CloudDownload,
  CloudUpload,
  Code,
  CodeBlock,
  CodeBracket,
  Codepen,
  CodeWrap,
  Coins,
  Command,
  Compass,
  Connection,
  Copy,
  CornerDownLeft,
  CornerDownRight,
  CornerLeftDown,
  CornerLeftUp,
  CornerRightDown,
  CornerRightUp,
  CornerUpLeft,
  CornerUpRight,
  Cpu,
  CreditCard,
  Crop,
  Cross,
  CrossCircle,
  CrossCircleFill,
  Crosshair,
  CrossSmall,
  Cursor,
  CursorClick,
  Database,
  DataPoint,
  DataPointLow,
  DataPointMedium,
  Delta,
  DesktopDevice,
  DeviceAlternate,
  Display,
  Dollar,
  DollarFill,
  Download,
  Droplet,
  Edge,
  EdgeConfig,
  Email,
  Envelope,
  External,
  ExternalSmall,
  Eye,
  EyeDashed,
  EyeOff,
  FaceHappy,
  FacePlus,
  FaceSad,
  FaceSmile,
  FaceUnhappy,
  File,
  FileText,
  FileZip,
  Filter,
  Fingerprint,
  FirewallCheck,
  FirewallGlobe,
  Flag,
  FlagPriority,
  FloppyDisk,
  FolderClosed,
  FolderMinus,
  FolderOpen,
  FolderPlus,
  Footer,
  Forward10Seconds,
  Fulcrum,
  Fullscreen,
  FullscreenClose,
  Function,
  FunctionEdge,
  FunctionEdgeColor,
  FunctionGo,
  FunctionMiddleware,
  FunctionNode,
  FunctionPython,
  FunctionRectangle,
  FunctionRectangleFill,
  FunctionRuby,
  FunctionSquare,
  Gauge,
  GitBranch,
  GitCommit,
  GitMerge,
  GitPullRequest,
  Globe,
  GlobeBox,
  Gps,
  GridMasonry,
  GridSquare,
  Hash,
  Header,
  Headset,
  Heart,
  HeartFill,
  Home,
  Hook,
  Image,
  Inbox,
  InboxUnread,
  Information,
  InformationFill,
  InformationFillSmall,
  Inspect,
  Invoice,
  Isr,
  Key,
  KeyOld,
  Kv,
  Lambda,
  LambdaRectangle,
  LambdaRectangleFill,
  Layers,
  Layout,
  LayoutDashed,
  LayoutShift,
  LayoutShiftUnread,
  Lens,
  Lifebuoy,
  Lightning,
  LineChart,
  Link,
  Linked,
  Linkedin,
  ListOrdered,
  ListUnordered,
  LoaderCircle,
  Location,
  LockClosed,
  LockClosedSmall,
  LockOpen,
  LogoAmex,
  LogoAngularColor,
  LogoAstro,
  LogoAzure,
  LogoAzureDevops,
  LogoBitbucketColor,
  LogoCheckly,
  LogoContentful,
  LogoDataDog,
  LogoDiscord,
  LogoEmber,
  LogoFacebook,
  LogoFacebookMessenger,
  LogoFigma,
  LogoGatsby,
  LogoGeist,
  LogoGithub,
  LogoGitlab,
  LogoGoogle,
  LogoGoogleCloudPlatform,
  LogoHugo,
  LogoHyper,
  LogoLinear,
  LogoMastercard,
  LogoMeta,
  LogoNewRelic,
  LogoNode,
  LogoNuxt,
  LogoOpenAi,
  LogoPython,
  LogoReact,
  LogoReddit,
  LogoRemix,
  LogoRust,
  LogoSanity,
  LogoSlack,
  LogoSlackColor,
  LogoSolid,
  LogoSplitbee,
  LogoSvelte,
  LogoTurbopack,
  LogoTurborepo,
  LogoTwitterX,
  Logout,
  LogoV0,
  LogoVercel,
  LogoVercelApi,
  LogoVercelCircle,
  LogoVercelFill,
  LogoVisa,
  LogoVite,
  LogoVue,
  LogoWhatsApp,
  LogoYCombinator,
  Logs,
  MagnifyingGlass,
  MagnifyingGlassMinus,
  MagnifyingGlassPlus,
  MagnifyingGlassSmall,
  Menu,
  MenuAlt,
  MenuAltUnread,
  Message,
  Microphone,
  MicrophoneOff,
  Middleware,
  Minus,
  MinusCircle,
  MinusSquareSmall,
  Monitoring,
  Monorepo,
  Moon,
  MoonAlternate,
  MoreHorizontal,
  MoreVertical,
  Music,
  MusicalNotes,
  NetworkDevice,
  Notebook,
  Notes,
  Notification,
  Option,
  PaperAirplane,
  Paperclip,
  Pause,
  Pen,
  Pencil,
  PencilEdit,
  Percentage,
  Phone,
  PhoneDevice,
  PictureInPicture,
  Pin,
  Play,
  PlayFill,
  Plus,
  PlusCircle,
  PlusSquareSmall,
  Postgres,
  Power,
  PreviewDocument,
  PreviewEye,
  Prism,
  PrismColor,
  Puzzle,
  Question,
  QuestionFill,
  RefreshClockwise,
  RefreshCounterClockwise,
  Repositories,
  Rewind10Seconds,
  Robot,
  RotateClockwise,
  RotateCounterClockwise,
  Route,
  Router,
  Rss,
  SecureConnection,
  Serverless,
  Servers,
  SettingsGear,
  SettingsGearFill,
  SettingsSlider,
  SettingsSliders,
  Share,
  Shareplay,
  Shield,
  ShieldCheck,
  ShieldGlobe,
  ShieldOff,
  ShieldSmall,
  Shift,
  SidebarLeft,
  SidebarRight,
  SignIn,
  SkipBack,
  SkipBackFill,
  SkipForward,
  SkipForwardFill,
  Slash,
  SlashBack,
  SlashForward,
  SortAscending,
  SortDescending,
  Spaces,
  Sparkles,
  Speaker,
  SpeakerFill,
  SpeakerOff,
  SpeakerOffFill,
  SpeakerVolumeLoud,
  SpeakerVolumeLoudFill,
  SpeakerVolumeQuiet,
  SpeakerVolumeQuietFill,
  Star,
  StarFill,
  Status,
  StatusSmall,
  Stop,
  StopCircle,
  StopFill,
  Stopwatch,
  StopwatchFast,
  StopwatchUnread,
  Store,
  Sun,
  SunAlternate,
  Tab,
  TabletDevice,
  Tabs,
  Tag,
  Target,
  Terminal,
  TerminalWindow,
  TextBold,
  TextFormat,
  TextHeading,
  TextItalic,
  TextStrikethrough,
  TextTitle,
  TextUppercase,
  ThumbDown,
  ThumbUp,
  ToggleOff,
  ToggleOffAlt,
  ToggleOffAltUnread,
  ToggleOn,
  ToggleOnAlt,
  ToggleOnAltUnread,
  Toolbar,
  Trash,
  User,
  UserCheck,
  UserCross,
  UserMinus,
  UserPlus,
  Users,
  UserScreen,
  UserSettings,
  Variable,
  Video,
  Warning,
  WarningFill,
  Webcam,
  WebcamOff,
  Webhook,
  Window,
  WindowGlobe,
  WindowVariable,
  Wrench,
  ZeroConfig,
} from 'geist-icons';
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const icons = [
  { name: "Accessibility", component: Accessibility },
  { name: "AccessibilityUnread", component: AccessibilityUnread },
  { name: "AcronymApi", component: AcronymApi },
  { name: "AcronymCsv", component: AcronymCsv },
  { name: "AcronymGif", component: AcronymGif },
  { name: "AcronymHttp", component: AcronymHttp },
  { name: "AcronymIsr", component: AcronymIsr },
  { name: "AcronymJpg", component: AcronymJpg },
  { name: "AcronymJs", component: AcronymJs },
  { name: "AcronymJson", component: AcronymJson },
  { name: "AcronymMarkdown", component: AcronymMarkdown },
  { name: "AcronymPage", component: AcronymPage },
  { name: "AcronymPpr", component: AcronymPpr },
  { name: "AcronymSvg", component: AcronymSvg },
  { name: "AcronymTs", component: AcronymTs },
  { name: "AlignmentCenter", component: AlignmentCenter },
  { name: "AlignmentLeft", component: AlignmentLeft },
  { name: "AlignmentRight", component: AlignmentRight },
  { name: "Alpha", component: Alpha },
  { name: "Analytics", component: Analytics },
  { name: "Anchor", component: Anchor },
  { name: "Api", component: Api },
  { name: "Archive", component: Archive },
  { name: "ArrowCircleDown", component: ArrowCircleDown },
  { name: "ArrowCircleLeft", component: ArrowCircleLeft },
  { name: "ArrowCircleRight", component: ArrowCircleRight },
  { name: "ArrowCircleUp", component: ArrowCircleUp },
  { name: "ArrowCrossed", component: ArrowCrossed },
  { name: "ArrowDown", component: ArrowDown },
  { name: "ArrowLeft", component: ArrowLeft },
  { name: "ArrowRight", component: ArrowRight },
  { name: "ArrowUp", component: ArrowUp },
  { name: "Backspace", component: Backspace },
  { name: "BarChart", component: BarChart },
  { name: "Bell", component: Bell },
  { name: "BellOff", component: BellOff },
  { name: "BookClosed", component: BookClosed },
  { name: "Bookmark", component: Bookmark },
  { name: "BookOpen", component: BookOpen },
  { name: "Box", component: Box },
  { name: "Briefcase", component: Briefcase },
  { name: "Bug", component: Bug },
  { name: "Calculator", component: Calculator },
  { name: "Calendar", component: Calendar },
  { name: "Camera", component: Camera },
  { name: "Cart", component: Cart },
  { name: "ChartPie", component: ChartPie },
  { name: "Check", component: Check },
  { name: "CheckCircle", component: CheckCircle },
  { name: "ChevronDown", component: ChevronDown },
  { name: "ChevronLeft", component: ChevronLeft },
  { name: "ChevronRight", component: ChevronRight },
  { name: "ChevronUp", component: ChevronUp },
  { name: "Clipboard", component: Clipboard },
  { name: "Clock", component: Clock },
  { name: "Cloud", component: Cloud },
  { name: "CloudDownload", component: CloudDownload },
  { name: "CloudUpload", component: CloudUpload },
  { name: "Code", component: Code },
  { name: "Command", component: Command },
  { name: "Compass", component: Compass },
  { name: "Copy", component: Copy },
  { name: "Cpu", component: Cpu },
  { name: "CreditCard", component: CreditCard },
  { name: "Cursor", component: Cursor },
  { name: "Database", component: Database },
  { name: "DesktopDevice", component: DesktopDevice },
  { name: "Download", component: Download },
  { name: "Email", component: Email },
  { name: "External", component: External },
  { name: "Eye", component: Eye },
  { name: "EyeOff", component: EyeOff },
  { name: "File", component: File },
  { name: "FileText", component: FileText },
  { name: "Filter", component: Filter },
  { name: "Flag", component: Flag },
  { name: "FolderOpen", component: FolderOpen },
  { name: "Fullscreen", component: Fullscreen },
  { name: "Gauge", component: Gauge },
  { name: "GitBranch", component: GitBranch },
  { name: "GitCommit", component: GitCommit },
  { name: "GitMerge", component: GitMerge },
  { name: "GitPullRequest", component: GitPullRequest },
  { name: "Globe", component: Globe },
  { name: "GridSquare", component: GridSquare },
  { name: "Hash", component: Hash },
  { name: "Headset", component: Headset },
  { name: "Heart", component: Heart },
  { name: "HeartFill", component: HeartFill },
  { name: "Home", component: Home },
  { name: "Image", component: Image },
  { name: "Inbox", component: Inbox },
  { name: "Information", component: Information },
  { name: "Key", component: Key },
  { name: "Layers", component: Layers },
  { name: "Layout", component: Layout },
  { name: "Lightning", component: Lightning },
  { name: "Link", component: Link },
  { name: "ListOrdered", component: ListOrdered },
  { name: "ListUnordered", component: ListUnordered },
  { name: "LoaderCircle", component: LoaderCircle },
  { name: "Location", component: Location },
  { name: "LockClosed", component: LockClosed },
  { name: "LockOpen", component: LockOpen },
  { name: "Logout", component: Logout },
  { name: "MagnifyingGlass", component: MagnifyingGlass },
  { name: "Menu", component: Menu },
  { name: "Message", component: Message },
  { name: "Microphone", component: Microphone },
  { name: "Minus", component: Minus },
  { name: "Moon", component: Moon },
  { name: "MoreHorizontal", component: MoreHorizontal },
  { name: "Music", component: Music },
  { name: "Notification", component: Notification },
  { name: "PaperAirplane", component: PaperAirplane },
  { name: "Pause", component: Pause },
  { name: "Pen", component: Pen },
  { name: "Phone", component: Phone },
  { name: "Play", component: Play },
  { name: "Plus", component: Plus },
  { name: "Power", component: Power },
  { name: "Question", component: Question },
  { name: "RefreshClockwise", component: RefreshClockwise },
  { name: "Route", component: Route },
  { name: "Search", component: MagnifyingGlass },
  { name: "Settings", component: SettingsGear },
  { name: "Share", component: Share },
  { name: "Shield", component: Shield },
  { name: "Star", component: Star },
  { name: "Sun", component: Sun },
  { name: "Tag", component: Tag },
  { name: "Terminal", component: Terminal },
  { name: "ThumbUp", component: ThumbUp },
  { name: "Trash", component: Trash },
  { name: "User", component: User },
  { name: "Users", component: Users },
  { name: "Video", component: Video },
  { name: "Warning", component: Warning },
  { name: "Wrench", component: Wrench },
];


export function IconLibrary() {
  const [search, setSearch] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [copiedOption, setCopiedOption] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  

  const filteredIcons = icons.filter((icon) =>
    icon.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
        setDropdownPosition(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const copyToClipboard = (
    iconName: string,
    type: "import" | "name" | "jsx" | "svg"
  ) => {
    let textToCopy = "";

    switch (type) {
      case "import":
        textToCopy = `import { ${iconName} } from 'geist-icons'`;
        break;
      case "name":
        textToCopy = iconName;
        break;
      case "jsx":
        textToCopy = `<${iconName} />`;
        break;
      case "svg":
        textToCopy = `<${iconName} className="w-6 h-6" />`;
        break;
    }

    navigator.clipboard.writeText(textToCopy);
    setCopiedOption(`${iconName}-${type}`);
    toast({
      description: `${type.charAt(0).toUpperCase() + type.slice(1)} copied to clipboard`,
    });
    setTimeout(() => {
      setCopiedOption(null);
      setOpenDropdown(null);
    }, 1500);
  };

  const handleIconClick = (iconName: string, event: React.MouseEvent) => {
    const isOpen = openDropdown === iconName;
    if (isOpen) {
      setOpenDropdown(null);
      setDropdownPosition(null);
    } else {
      setOpenDropdown(iconName);
      setDropdownPosition({ x: event.clientX, y: event.clientY });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-balance text-6xl font-semibold tracking-tight text-foreground">
              Geist Icons
            </h1>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              A carefully crafted collection of icons for building beautiful
              interfaces. Click any icon to see copy options.
            </p>


            <div className="mt-12">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Installation
              </h3>
              <div className="rounded-lg border border-border bg-muted/50 px-4 py-4 font-mono text-sm text-foreground shadow-sm">
                npm install geist-icons
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Usage
              </h3>
              <div className="rounded-lg border border-border bg-muted/50 px-4 py-4 font-mono text-sm text-foreground shadow-sm">
                import {"{ Home }"} from 'geist-icons'
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="mb-10">
          <div className="relative max-w-md">
            <MagnifyingGlass className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search icons..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-11 border-border bg-background pl-10 text-sm shadow-sm transition-shadow focus-visible:shadow-md focus-visible:ring-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8">
          {filteredIcons.map((icon) => {
            const IconComponent = icon.component;
            const isOpen = openDropdown === icon.name;
            return (
              <div key={icon.name} className="relative">
                <button
                  onClick={(e) => handleIconClick(icon.name, e)}
                  className="group relative flex h-full w-full flex-col items-center justify-center gap-3 bg-card p-6 transition-all hover:bg-accent"
                >
                  <IconComponent
                    className="h-6 w-6 text-foreground/70 transition-all group-hover:scale-110 group-hover:text-foreground"
                    strokeWidth={1.5}
                  />
                  <span className="text-center text-xs font-medium leading-tight text-muted-foreground transition-colors group-hover:text-foreground">
                    {icon.name}
                  </span>
                </button>

                {isOpen && dropdownPosition && (
                  <div
                    ref={dropdownRef}
                    className="fixed z-50 w-48"
                    style={{
                      left: `${dropdownPosition.x}px`,
                      top: `${dropdownPosition.y + 8}px`,
                      transform: "translateX(-50%)",
                    }}
                  >
                    <div className="overflow-hidden rounded-lg border border-border bg-popover shadow-lg">
                      <div className="p-1">
                        <button
                          onClick={() => {
                            copyToClipboard(icon.name, "import");
                            setOpenDropdown("");
                          }}
                          className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-accent"
                        >
                          <span className="flex-1 text-left font-medium text-popover-foreground">
                            Copy Import
                          </span>
                          {copiedOption === `${icon.name}-import` && (
                            <Check
                              className="h-4 w-4 text-primary"
                              strokeWidth={2}
                            />
                          )}
                        </button>
                        <button
                          onClick={() => {
                            copyToClipboard(icon.name, "name");

                            setOpenDropdown("");
                          }}
                          className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-accent"
                        >
                          <span className="flex-1 text-left font-medium text-popover-foreground">
                            Copy Name
                          </span>
                          {copiedOption === `${icon.name}-name` && (
                            <Check
                              className="h-4 w-4 text-primary"
                              strokeWidth={2}
                            />
                          )}
                        </button>
                        <button
                          onClick={() => {
                            copyToClipboard(icon.name, "jsx");
                            setOpenDropdown("");
                          }}
                          className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-accent"
                        >
                          <span className="flex-1 text-left font-medium text-popover-foreground">
                            Copy JSX
                          </span>
                          {copiedOption === `${icon.name}-jsx` && (
                            <Check
                              className="h-4 w-4 text-primary"
                              strokeWidth={2}
                            />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredIcons.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <MagnifyingGlass
              className="mb-4 h-12 w-12 text-muted-foreground/40"
              strokeWidth={1.5}
            />
            <h3 className="mb-2 text-base font-medium text-foreground">
              No icons found
            </h3>
            <p className="text-sm text-muted-foreground">
              Try searching for a different term
            </p>
          </div>
        )}

      
      </div>
    </div>
  );
}
