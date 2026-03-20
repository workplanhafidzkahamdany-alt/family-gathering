export interface InfoItem {
  icon: string;
  label: string;
  val: string;
  note: string;
  color: string;
}

export interface RundownItem {
  time: string;
  name: string;
  loc: string;
  dur: string;
  pic: string;
  status: "done" | "ongoing" | "pending";
  notes: string;
}

export interface GameItem {
  emoji: string;
  name: string;
  cat: string;
  color: string;
  min: number;
  max: number;
  dur: string;
  notes: string;
}

export interface PicItem {
  emoji: string;
  role: string;
  resp: string;
  color: string;
}

export interface EquipItem {
  icon: string;
  name: string;
  cat: string;
  qty: string;
}

export const infoData: InfoItem[] = [
  {
    icon: "📅",
    label: "Date",
    val: "TBD — 2025",
    note: "Full day, 07:00 – 18:30",
    color: "#C9A84C",
  },
  {
    icon: "📍",
    label: "Venue",
    val: "To Be Announced",
    note: "Details coming soon!",
    color: "#1A6B47",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    label: "Who's Coming",
    val: "All Family Members",
    note: "Kids, adults & elders!",
    color: "#0D4A5C",
  },
  {
    icon: "🍽️",
    label: "Food",
    val: "Full Catering",
    note: "Snacks, buffet lunch & cake",
    color: "#7B1F2E",
  },
  {
    icon: "🎮",
    label: "Activities",
    val: "16 Sessions",
    note: "Games, talent show & more",
    color: "#1A6B47",
  },
  {
    icon: "🎁",
    label: "Extras",
    val: "Gift Exchange",
    note: "Takeaway packs for everyone",
    color: "#C9A84C",
  },
];

export const rundownData: RundownItem[] = [
  {
    time: "07:00",
    name: "Kumpul",
    loc: "Tahura",
    dur: "2h",
    pic: "",
    status: "done",
    notes: "Kedatangan seluruh Keluarga Wagrim",
  },
  {
    time: "09:00",
    name: "Pembukaan Acara",
    loc: "",
    dur: "5m",
    pic: "MC",
    status: "ongoing",
    notes: "Pembukaan acara Halalbihalal",
  },
  {
    time: "09:05",
    name: "Sambutan Ketua Panitia",
    loc: "",
    dur: "5m",
    pic: "Bpk. Willy Hendra Pranoko",
    status: "pending",
    notes: "Sambutan hangat dari Ketua Panitia",
  },
  {
    time: "09:10",
    name: "Sambutan Sesepuh",
    loc: "",
    dur: "5m",
    pic: "Bpk. Banjar S.",
    status: "pending",
    notes: "Sambutan hangat dari Sesepuh Keluarga Wagrim",
  },
  {
    time: "09:15",
    name: "Doa Bersama",
    loc: "",
    dur: "5m",
    pic: "Bpk. Jajat",
    status: "pending",
    notes: "",
  },
  {
    time: "09:20",
    name: "Photo Bersama",
    loc: "",
    dur: "15m",
    pic: "MC, Photographer",
    status: "pending",
    notes: "",
  },
  {
    time: "09:35",
    name: "Coffee Break dan Snack",
    loc: "",
    dur: "10m",
    pic: "",
    status: "pending",
    notes: "Sarapan dan cemal-cemil",
  },
  {
    time: "09:45",
    name: "Fun Games",
    loc: "",
    dur: "1h 45m",
    pic: "",
    status: "pending",
    notes: "",
  },
  {
    time: "11:30",
    name: "Istirahat, Makan Siang, Sholat",
    loc: "",
    dur: "1h 30m",
    pic: "",
    status: "pending",
    notes: "",
  },
  {
    time: "13:00",
    name: "Tukar Kado",
    loc: "",
    dur: "15m",
    pic: "",
    status: "pending",
    notes: "",
  },
  {
    time: "13:15",
    name: "Pemberian Kadeudeuh",
    loc: "",
    dur: "15m",
    pic: "",
    status: "pending",
    notes: "",
  },
  {
    time: "13:30",
    name: "Doorprize",
    loc: "",
    dur: "30m",
    pic: "",
    status: "pending",
    notes: "",
  },
  {
    time: "14:00",
    name: "Bagi-bagi THR",
    loc: "",
    dur: "30m",
    pic: "",
    status: "pending",
    notes: "",
  },
  {
    time: "14:30",
    name: "Penutupan Acara Halalbihalal & Doa Bersama",
    loc: "",
    dur: "15m",
    pic: "MC & Bpk. Atot",
    status: "pending",
    notes: "",
  },
];

export const gamesData: GameItem[] = [
  {
    emoji: "😂",
    name: "Tali Kanan Kiri",
    cat: "Icebreaker",
    color: "#8B6914",
    min: 6,
    max: 10,
    dur: "20 min",
    notes: "",
  },
  {
    emoji: "🎈",
    name: "Lempar Bola Jongkok",
    cat: "Active",
    color: "#7B1F2E",
    min: 6,
    max: 10,
    dur: "20 min",
    notes: "",
  },
  {
    emoji: "🧠",
    name: "Hitung 3, 6, 9",
    cat: "Active",
    color: "#C9A84C",
    min: 6,
    max: 10,
    dur: "20 min",
    notes: "",
  },
  {
    emoji: "💪",
    name: "Pundak Lutut Ambil",
    cat: "Active",
    color: "#0D4A5C",
    min: 1,
    max: 1,
    dur: "15 min",
    notes: "",
  },
  {
    emoji: "🥚",
    name: "Ping Pong Uang",
    cat: "Active",
    color: "#7B1F2E",
    min: 1,
    max: 1,
    dur: "15 min",
    notes: "Balance egg on spoon to finish line",
  },
];

export const picData: PicItem[] = [
  {
    emoji: "🎙️",
    role: "MC / Host",
    resp: "Emcee, flow & time management",
    color: "#C9A84C",
  },
  {
    emoji: "📋",
    role: "Registration Team",
    resp: "Guest check-in & name tags",
    color: "#7B1F2E",
  },
  {
    emoji: "🍱",
    role: "Catering Team",
    resp: "Food, beverages & desserts",
    color: "#0D4A5C",
  },
  {
    emoji: "🎮",
    role: "Games Committee",
    resp: "Ice breakers & gift exchange",
    color: "#1A6B47",
  },
  {
    emoji: "📸",
    role: "Photographer",
    resp: "Photo & video documentation",
    color: "#8B6914",
  },
  {
    emoji: "🧹",
    role: "Clean-Up Team",
    resp: "Post-event venue clean-up",
    color: "#1A6B47",
  },
  {
    emoji: "⚙️",
    role: "Committee Team",
    resp: "Overall coordination & logistics",
    color: "#0D4A5C",
  },
];

export const equipData: EquipItem[] = [
  { icon: "🎤", name: "Microphone (wireless)", cat: "Audio", qty: "2 units" },
  { icon: "🔊", name: "PA / Speaker System", cat: "Audio", qty: "1 set" },
  { icon: "📽️", name: "Projector + Screen", cat: "AV", qty: "1 set" },
  { icon: "💻", name: "Laptop + HDMI Cable", cat: "AV", qty: "1 unit" },
  { icon: "📷", name: "Camera + Backdrop", cat: "Photo", qty: "1 set" },
  { icon: "💡", name: "Ring Lights", cat: "Photo", qty: "2 units" },
  { icon: "🪑", name: "Tables & Chairs", cat: "Furniture", qty: "10T / 50C" },
  { icon: "🍽️", name: "Plates & Cutlery", cat: "Catering", qty: "60 sets" },
  { icon: "📝", name: "Name Tags", cat: "Registration", qty: "60 pcs" },
  { icon: "🎁", name: "Gift Baskets + Labels", cat: "Games", qty: "1 set" },
  {
    icon: "🎂",
    name: "Birthday Cake + Candles",
    cat: "Celebration",
    qty: "1 unit",
  },
  { icon: "👜", name: "Takeaway Packs", cat: "Farewell", qty: "50 pcs" },
  { icon: "🧰", name: "First Aid Kit", cat: "Safety ⚠️", qty: "1 kit" },
  { icon: "🧹", name: "Cleaning Supplies", cat: "Clean-Up", qty: "1 set" },
];
