import { 
  BarChart3, 
  Share2, 
  Key, 
  ShieldCheck, 
  CreditCard, 
  Package, 
  Globe2, 
  Wrench,
  ShoppingCart
} from "lucide-react";
import { Category } from "./types";

export const CATEGORIES: Category[] = [
  {
    id: "analysis",
    title: "选品分析 Analysis",
    icon: BarChart3,
    items: [
      { id: "a1", name: "欧洲FBA费用", description: "提供你的履约费用，并查看不同履约方式之间的实时对比", url: "#", iconColor: "bg-orange-500", iconInitial: "FBA" },
      { id: "a2", name: "德亚销售榜", description: "德国亚马逊销售排行榜", url: "#", iconColor: "bg-yellow-500", iconInitial: "DE" },
      { id: "a3", name: "英亚销售榜", description: "英国亚马逊销售排行榜", url: "#", iconColor: "bg-blue-600", iconInitial: "UK" },
      { id: "a4", name: "法亚销售榜", description: "法国亚马逊销售排行榜", url: "#", iconColor: "bg-indigo-500", iconInitial: "FR" },
      { id: "a5", name: "美亚销售榜", description: "美国亚马逊销售排行榜", url: "#", iconColor: "bg-blue-500", iconInitial: "US" },
      { id: "a6", name: "美亚新品榜", description: "美国亚马逊新品排行榜", url: "#", iconColor: "bg-green-500", iconInitial: "New" },
    ]
  },
  {
    id: "social",
    title: "社交媒体 Social",
    icon: Share2,
    items: [
      { id: "s1", name: "Facebook", description: "全球最大社交平台", url: "https://facebook.com", iconColor: "bg-blue-600", iconInitial: "fb" },
      { id: "s2", name: "YouTube", description: "全球最大的视频网站", url: "https://youtube.com", iconColor: "bg-red-600", iconInitial: "YT" },
      { id: "s3", name: "X (Twitter)", description: "美国微博", url: "https://twitter.com", iconColor: "bg-black", iconInitial: "X" },
      { id: "s4", name: "Instagram", description: "全球最大的图片社交平台", url: "https://instagram.com", iconColor: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500", iconInitial: "In" },
      { id: "s5", name: "Pinterest", description: "瀑布流图片社区", url: "https://pinterest.com", iconColor: "bg-red-700", iconInitial: "P" },
      { id: "s6", name: "TikTok", description: "海外抖音", url: "https://tiktok.com", iconColor: "bg-black", iconInitial: "Tk" },
      { id: "s7", name: "WhatsApp", description: "Facebook旗下的全球性移动聊天工具", url: "https://whatsapp.com", iconColor: "bg-green-500", iconInitial: "WA" },
      { id: "s8", name: "LinkedIn", description: "全球知名的职场社交平台", url: "https://linkedin.com", iconColor: "bg-blue-700", iconInitial: "in" },
    ]
  },
  {
    id: "keywords",
    title: "关键词 Keywords",
    icon: Key,
    items: [
      { id: "k1", name: "卖家精灵", description: "查竞品出单词/流量词，关键词精准反查", url: "#", iconColor: "bg-orange-400", iconInitial: "S" },
      { id: "k2", name: "Sif关键词体系", description: "查广告架构，运营打法，流量结构", url: "#", iconColor: "bg-emerald-500", iconInitial: "Sif" },
      { id: "k3", name: "领星关键词管理", description: "关键词实时监控/出单与词频分析", url: "#", iconColor: "bg-blue-500", iconInitial: "L" },
      { id: "k4", name: "Google Trends", description: "谷歌趋势，查看关键词搜索热度", url: "#", iconColor: "bg-blue-500", iconInitial: "G" },
      { id: "k5", name: "MerchantWords", description: "拥有海量亚马逊关键词数据", url: "#", iconColor: "bg-orange-300", iconInitial: "M" },
    ]
  },
  {
    id: "patents",
    title: "商标专利 Patent",
    icon: ShieldCheck,
    items: [
      { id: "p1", name: "欧洲商标局", description: "负责管理欧盟商标和注册的共同体外观设计", url: "#", iconColor: "bg-blue-600", iconInitial: "EU" },
      { id: "p2", name: "美国商标局", description: "美国商标局官网", url: "#", iconColor: "bg-slate-700", iconInitial: "US" },
      { id: "p3", name: "英国商标局", description: "负责知识产权的官方政府机构", url: "#", iconColor: "bg-black", iconInitial: "UK" },
      { id: "p4", name: "WIPO商标查询", description: "WIPO商标查询系统", url: "#", iconColor: "bg-blue-500", iconInitial: "W" },
    ]
  },
  {
    id: "payment",
    title: "收款支付 Payment",
    icon: CreditCard,
    items: [
      { id: "pay1", name: "PayPal", description: "全球性的在线支付公司", url: "#", iconColor: "bg-blue-700", iconInitial: "P" },
      { id: "pay2", name: "PingPong", description: "多平台多币种极速到账", url: "#", iconColor: "bg-red-500", iconInitial: "Pg" },
      { id: "pay3", name: "万里汇 (WorldFirst)", description: "蚂蚁集团旗下品牌，多平台多币种收款", url: "#", iconColor: "bg-red-600", iconInitial: "WF" },
      { id: "pay4", name: "Visa Pay", description: "Visa Pay是一款便捷安全的支付方式", url: "#", iconColor: "bg-blue-800", iconInitial: "V" },
      { id: "pay5", name: "连连支付", description: "全牌照，无汇损，费率0.7%封顶", url: "#", iconColor: "bg-blue-500", iconInitial: "L" },
    ]
  },
  {
    id: "sourcing",
    title: "货源网站 Sourcing",
    icon: Package,
    items: [
      { id: "src1", name: "1688", description: "全球领先的采购批发平台", url: "#", iconColor: "bg-orange-500", iconInitial: "1688" },
      { id: "src2", name: "淘宝", description: "深受欢迎的网购零售平台", url: "#", iconColor: "bg-orange-600", iconInitial: "淘" },
      { id: "src3", name: "阿里国际", description: "全球专业的国际外贸出口平台", url: "#", iconColor: "bg-orange-400", iconInitial: "Al" },
      { id: "src4", name: "拼多多", description: "国内主流电商平台", url: "#", iconColor: "bg-red-600", iconInitial: "拼" },
      { id: "src5", name: "义乌购", description: "义乌小商品批发市场官方网站", url: "#", iconColor: "bg-orange-500", iconInitial: "义" },
    ]
  },
  {
    id: "uk",
    title: "英国网站 UK",
    icon: Globe2,
    items: [
      { id: "uk1", name: "eBay", description: "英国线上拍卖及购物网站", url: "#", iconColor: "bg-red-500", iconInitial: "ebay" },
      { id: "uk2", name: "Argos", description: "英国家喻户晓的百货零售连锁商", url: "#", iconColor: "bg-red-700", iconInitial: "Arg" },
      { id: "uk3", name: "Tesco", description: "英国最大的零售公司", url: "#", iconColor: "bg-blue-600", iconInitial: "Tsc" },
      { id: "uk4", name: "SHEIN", description: "英国时尚服装市场网站", url: "#", iconColor: "bg-black", iconInitial: "S" },
    ]
  },
  {
    id: "germany",
    title: "德国网站 Germany",
    icon: Globe2,
    items: [
      { id: "de1", name: "Otto.de", description: "德国第二大电商平台", url: "#", iconColor: "bg-red-600", iconInitial: "OTTO" },
      { id: "de2", name: "Zalando", description: "德国最大时尚电子商务公司", url: "#", iconColor: "bg-orange-500", iconInitial: "Z" },
      { id: "de3", name: "MediaMarkt", description: "德国和欧洲第一大电子零售商", url: "#", iconColor: "bg-red-700", iconInitial: "MM" },
      { id: "de4", name: "Kaufland", description: "欧洲第5大食品零售商", url: "#", iconColor: "bg-red-600", iconInitial: "K" },
    ]
  },
  {
    id: "france",
    title: "法国网站 France",
    icon: Globe2,
    items: [
      { id: "fr1", name: "Cdiscount", description: "法国第二大的电子商务平台", url: "#", iconColor: "bg-yellow-500", iconInitial: "Cd" },
      { id: "fr2", name: "Fnac", description: "知名的文化产品和电器产品零售商", url: "#", iconColor: "bg-yellow-600", iconInitial: "Fnac" },
      { id: "fr3", name: "ManoMano", description: "欧洲最大的DIY、家具和园艺商店", url: "#", iconColor: "bg-emerald-500", iconInitial: "M" },
    ]
  },
  {
    id: "tools",
    title: "常用工具 Tools",
    icon: Wrench,
    items: [
      { id: "t1", name: "DeepL", description: "全球最准确的翻译工具", url: "#", iconColor: "bg-blue-900", iconInitial: "D" },
      { id: "t2", name: "XE Currency", description: "实时汇率查询", url: "#", iconColor: "bg-blue-600", iconInitial: "X" },
      { id: "t3", name: "17Track", description: "全球物流查询平台", url: "#", iconColor: "bg-orange-500", iconInitial: "17" },
      { id: "t4", name: "Time.is", description: "世界时间查询", url: "#", iconColor: "bg-black", iconInitial: "T" },
    ]
  }
];
