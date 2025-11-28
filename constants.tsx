import { 
  BarChart3, 
  Share2, 
  Key, 
  ShieldCheck, 
  CreditCard, 
  Package, 
  Globe2, 
  Wrench
} from "lucide-react";
import { Category } from "./types";

export const CATEGORIES: Category[] = [
  {
    id: "analysis",
    title: "选品分析 Analysis",
    icon: BarChart3,
    items: [
      { id: "a1", name: "德亚销售榜", description: "德国亚马逊销售排行榜", url: "https://www.amazon.de/gp/bestsellers", iconColor: "bg-amber-500", iconInitial: "a" },
      { id: "a2", name: "英亚销售榜", description: "英国亚马逊销售排行榜", url: "https://www.amazon.co.uk/gp/bestsellers", iconColor: "bg-amber-500", iconInitial: "a" },
      { id: "a3", name: "法亚销售榜", description: "法国亚马逊销售排行榜", url: "https://www.amazon.fr/gp/bestsellers", iconColor: "bg-amber-500", iconInitial: "a" },
      { id: "a4", name: "美亚销售榜", description: "美国亚马逊销售排行榜", url: "https://www.amazon.com/gp/bestsellers", iconColor: "bg-amber-500", iconInitial: "a" },
      { id: "a5", name: "美亚新品榜", description: "美国亚马逊新品排行榜", url: "https://www.amazon.com/gp/new-releases", iconColor: "bg-amber-500", iconInitial: "a" },
      { id: "a6", name: "美亚飙升榜", description: "美国亚马逊销售飙升榜", url: "https://www.amazon.com/gp/movers-and-shakers", iconColor: "bg-amber-500", iconInitial: "a" },
      { id: "a7", name: "日亚销售榜", description: "日本亚马逊销售排行榜（需翻墙）", url: "https://www.amazon.co.jp/gp/bestsellers", iconColor: "bg-amber-500", iconInitial: "a" },
      { id: "a8", name: "加大拿销售榜", description: "加拿大亚马逊销售排行榜", url: "https://www.amazon.ca/gp/bestsellers", iconColor: "bg-amber-500", iconInitial: "a+" },
      { id: "a9", name: "Temu Bestsellers", description: "每日更新Temu最受欢迎榜单", url: "https://www.temu.com/bestsellers.html", iconColor: "bg-orange-600", iconInitial: "Tm" },
      { id: "a10", name: "谷歌趋势", description: "查看关键词在Google的搜索次数及变化趋势", url: "https://trends.google.com/", iconColor: "bg-blue-500", iconInitial: "G" },
      { id: "a11", name: "Walmart Bestsellers", description: "沃尔玛平台最受欢迎产品榜单", url: "https://www.walmart.com/cp/best-sellers/1085666", iconColor: "bg-blue-700", iconInitial: "*" },
      { id: "a12", name: "谷歌商机洞察", description: "查看产品类在全球每一个国家的具体市场需求和容量", url: "https://marketfinder.thinkwithgoogle.com/", iconColor: "bg-blue-500", iconInitial: "G" },
      { id: "a13", name: "Most Wished For", description: "亚马逊买家愿望清单", url: "https://www.amazon.com/gp/most-wished-for", iconColor: "bg-gray-900", iconInitial: "a" },
      { id: "a14", name: "Today's Deals", description: "美国亚马逊每日促销", url: "https://www.amazon.com/gp/goldbox", iconColor: "bg-gray-900", iconInitial: "a" },
      { id: "a15", name: "Ebay Daily", description: "Ebay 平台每日促销商品", url: "https://www.ebay.com/globaldeals", iconColor: "bg-green-600", iconInitial: "ebay" },
      { id: "a16", name: "Indiegogo", description: "美国第二大的众筹网站", url: "https://www.indiegogo.com/", iconColor: "bg-pink-600", iconInitial: "GO" },
      { id: "a17", name: "Kickstarter", description: "美国最大的众筹网站", url: "https://www.kickstarter.com/", iconColor: "bg-black", iconInitial: "K" },
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
      { id: "k1", name: "卖家精灵", description: "查竞品出单词/流量词，关键词精准反查", url: "https://www.sellersprite.com/", iconColor: "bg-orange-400", iconInitial: "S" },
      { id: "k2", name: "Sif关键词体系", description: "查广告架构，运营打法，流量结构", url: "https://www.sif.com/", iconColor: "bg-emerald-500", iconInitial: "Sif" },
      { id: "k3", name: "领星关键词管理", description: "关键词实时监控/出单与词频分析", url: "https://www.lingxing.com/", iconColor: "bg-blue-500", iconInitial: "L" },
      { id: "k4", name: "Google Trends", description: "谷歌趋势，查看关键词搜索热度", url: "https://trends.google.com/", iconColor: "bg-blue-500", iconInitial: "G" },
      { id: "k5", name: "MerchantWords", description: "拥有海量亚马逊关键词数据", url: "https://www.merchantwords.com/", iconColor: "bg-orange-300", iconInitial: "M" },
    ]
  },
  {
    id: "patents",
    title: "商标专利 Patent",
    icon: ShieldCheck,
    items: [
      { id: "p1", name: "欧洲商标局", description: "负责管理欧盟商标和注册的共同体外观设计", url: "https://euipo.europa.eu/", iconColor: "bg-blue-600", iconInitial: "EU" },
      { id: "p2", name: "美国商标局", description: "美国商标局官网", url: "https://www.uspto.gov/", iconColor: "bg-slate-700", iconInitial: "US" },
      { id: "p3", name: "英国商标局", description: "负责知识产权的官方政府机构", url: "https://www.gov.uk/government/organisations/intellectual-property-office", iconColor: "bg-black", iconInitial: "UK" },
      { id: "p4", name: "WIPO商标查询", description: "WIPO商标查询系统", url: "https://www3.wipo.int/branddb/en/", iconColor: "bg-blue-500", iconInitial: "W" },
    ]
  },
  {
    id: "payment",
    title: "收款支付 Payment",
    icon: CreditCard,
    items: [
      { id: "pay1", name: "PayPal", description: "全球性的在线支付公司", url: "https://www.paypal.com/", iconColor: "bg-blue-700", iconInitial: "P" },
      { id: "pay2", name: "PingPong", description: "多平台多币种极速到账", url: "https://www.pingpongx.com/", iconColor: "bg-red-500", iconInitial: "Pg" },
      { id: "pay3", name: "万里汇 (WorldFirst)", description: "蚂蚁集团旗下品牌，多平台多币种收款", url: "https://www.worldfirst.com/", iconColor: "bg-red-600", iconInitial: "WF" },
      { id: "pay4", name: "Visa Pay", description: "Visa Pay是一款便捷安全的支付方式", url: "https://www.visa.com/", iconColor: "bg-blue-800", iconInitial: "V" },
      { id: "pay5", name: "连连支付", description: "全牌照，无汇损，费率0.7%封顶", url: "https://www.lianlianpay.com/", iconColor: "bg-blue-500", iconInitial: "L" },
    ]
  },
  {
    id: "sourcing",
    title: "货源网站 Sourcing",
    icon: Package,
    items: [
      { id: "src1", name: "1688", description: "全球领先的采购批发平台", url: "https://www.1688.com/", iconColor: "bg-orange-500", iconInitial: "1688" },
      { id: "src2", name: "淘宝", description: "深受欢迎的网购零售平台", url: "https://www.taobao.com/", iconColor: "bg-orange-600", iconInitial: "淘" },
      { id: "src3", name: "阿里国际", description: "全球专业的国际外贸出口平台", url: "https://www.alibaba.com/", iconColor: "bg-orange-400", iconInitial: "Al" },
      { id: "src4", name: "拼多多", description: "国内主流电商平台", url: "https://www.pinduoduo.com/", iconColor: "bg-red-600", iconInitial: "拼" },
      { id: "src5", name: "义乌购", description: "义乌小商品批发市场官方网站", url: "https://www.yiwugo.com/", iconColor: "bg-orange-500", iconInitial: "义" },
    ]
  },
  {
    id: "uk",
    title: "英国网站 UK",
    icon: Globe2,
    items: [
      { id: "uk1", name: "eBay", description: "英国线上拍卖及购物网站", url: "https://www.ebay.co.uk/", iconColor: "bg-red-500", iconInitial: "ebay" },
      { id: "uk2", name: "Argos", description: "英国家喻户晓的百货零售连锁商", url: "https://www.argos.co.uk/", iconColor: "bg-red-700", iconInitial: "Arg" },
      { id: "uk3", name: "Tesco", description: "英国最大的零售公司", url: "https://www.tesco.com/", iconColor: "bg-blue-600", iconInitial: "Tsc" },
      { id: "uk4", name: "SHEIN", description: "英国时尚服装市场网站", url: "https://www.shein.co.uk/", iconColor: "bg-black", iconInitial: "S" },
    ]
  },
  {
    id: "germany",
    title: "德国网站 Germany",
    icon: Globe2,
    items: [
      { id: "de1", name: "Otto.de", description: "德国第二大电商平台", url: "https://www.otto.de/", iconColor: "bg-red-600", iconInitial: "OTTO" },
      { id: "de2", name: "Zalando", description: "德国最大时尚电子商务公司", url: "https://www.zalando.de/", iconColor: "bg-orange-500", iconInitial: "Z" },
      { id: "de3", name: "MediaMarkt", description: "德国和欧洲第一大电子零售商", url: "https://www.mediamarkt.de/", iconColor: "bg-red-700", iconInitial: "MM" },
      { id: "de4", name: "Kaufland", description: "欧洲第5大食品零售商", url: "https://www.kaufland.de/", iconColor: "bg-red-600", iconInitial: "K" },
    ]
  },
  {
    id: "france",
    title: "法国网站 France",
    icon: Globe2,
    items: [
      { id: "fr1", name: "Cdiscount", description: "法国第二大的电子商务平台", url: "https://www.cdiscount.com/", iconColor: "bg-yellow-500", iconInitial: "Cd" },
      { id: "fr2", name: "Fnac", description: "知名的文化产品和电器产品零售商", url: "https://www.fnac.com/", iconColor: "bg-yellow-600", iconInitial: "Fnac" },
      { id: "fr3", name: "ManoMano", description: "欧洲最大的DIY、家具和园艺商店", url: "https://www.manomano.fr/", iconColor: "bg-emerald-500", iconInitial: "M" },
      { id: "fr4", name: "Darty", description: "法国知名家电零售商", url: "https://www.darty.com/", iconColor: "bg-slate-800", iconInitial: "D" },
    ]
  },
  {
    id: "italy",
    title: "意大利网站 Italy",
    icon: Globe2,
    items: [
      { id: "it1", name: "eBay", description: "eBay在意大利开设的分站", url: "https://www.ebay.it/", iconColor: "bg-red-500", iconInitial: "ebay" },
      { id: "it2", name: "Zalando", description: "销售世界品牌服装，包括儿童服装", url: "https://www.zalando.it/", iconColor: "bg-orange-500", iconInitial: "Z" },
      { id: "it3", name: "ManoMano", description: "欧洲最大的DIY、家具和园艺商店", url: "https://www.manomano.it/", iconColor: "bg-emerald-500", iconInitial: "M" },
      { id: "it4", name: "速卖通", description: "阿里巴巴旗下唯一面向意大利市场的平台", url: "https://it.aliexpress.com/", iconColor: "bg-orange-600", iconInitial: "Ali" },
      { id: "it5", name: "MediaWorld", description: "专门从事消费电子产品零售的德国跨国连锁店", url: "https://www.mediaworld.it/", iconColor: "bg-red-600", iconInitial: "MW" },
    ]
  },
  {
    id: "spain",
    title: "西班牙网站 Spain",
    icon: Globe2,
    items: [
      { id: "es1", name: "速卖通", description: "为消费者提供了一系列高性价比的产品", url: "https://es.aliexpress.com/", iconColor: "bg-orange-600", iconInitial: "Ali" },
      { id: "es2", name: "eBay", description: "eBay在西班牙开设的分站", url: "https://www.ebay.es/", iconColor: "bg-red-500", iconInitial: "ebay" },
      { id: "es3", name: "Miravia", description: "欧洲西班牙品质时尚综合型电商平台", url: "https://www.miravia.es/", iconColor: "bg-purple-600", iconInitial: "M" },
      { id: "es4", name: "Zalando", description: "涵盖了时尚、生活、体育等领域的电子商务平台", url: "https://www.zalando.es/", iconColor: "bg-orange-500", iconInitial: "Z" },
      { id: "es5", name: "ManoMano", description: "欧洲最大的DIY、家具和园艺商店", url: "https://www.manomano.es/", iconColor: "bg-emerald-500", iconInitial: "M" },
    ]
  },
  {
    id: "portugal",
    title: "葡萄牙网站 Portugal",
    icon: Globe2,
    items: [
      { id: "pt1", name: "速卖通", description: "速卖通葡萄牙站，提供了服饰、家居用品、电子产品", url: "https://pt.aliexpress.com/", iconColor: "bg-orange-600", iconInitial: "Ali" },
      { id: "pt2", name: "Worten", description: "著名的专业售卖电子产品的电商平台", url: "https://www.worten.pt/", iconColor: "bg-red-600", iconInitial: "W" },
      { id: "pt3", name: "Fnac", description: "知名的文化产品和电器产品零售商", url: "https://www.fnac.pt/", iconColor: "bg-yellow-500", iconInitial: "Fnac" },
      { id: "pt4", name: "Vinted", description: "Vinted葡萄牙站，提供了服饰、鞋子、手袋、配饰", url: "https://www.vinted.pt/", iconColor: "bg-cyan-500", iconInitial: "V" },
    ]
  },
  {
    id: "russia",
    title: "俄罗斯网站 Russia",
    icon: Globe2,
    items: [
      { id: "ru1", name: "Wildberries", description: "俄罗斯本土最大的线上平台之一", url: "https://www.wildberries.ru/", iconColor: "bg-purple-700", iconInitial: "wb" },
      { id: "ru2", name: "Ozon", description: "俄罗斯第二大电商平台", url: "https://www.ozon.ru/", iconColor: "bg-blue-500", iconInitial: "oz" },
      { id: "ru3", name: "YandexMarket", description: "俄罗斯Yandex旗下的综合购物网站", url: "https://market.yandex.ru/", iconColor: "bg-red-600", iconInitial: "Y" },
      { id: "ru4", name: "速卖通", description: "中国最大的跨境出口B2C平台", url: "https://aliexpress.ru/", iconColor: "bg-orange-600", iconInitial: "Ali" },
      { id: "ru5", name: "DNSShop", description: "电子产品零售商", url: "https://www.dns-shop.ru/", iconColor: "bg-orange-500", iconInitial: "DNS" },
    ]
  },
  {
    id: "turkey",
    title: "土耳其网站 Turkey",
    icon: Globe2,
    items: [
      { id: "tr1", name: "Trendyol", description: "土耳其最大的电商平台", url: "https://www.trendyol.com/", iconColor: "bg-orange-500", iconInitial: "tr" },
      { id: "tr2", name: "Hepsiburada", description: "土耳其领先的电子商务网站", url: "https://www.hepsiburada.com/", iconColor: "bg-orange-600", iconInitial: "H" },
      { id: "tr3", name: "Gittigidiyor", description: "土耳其的一家拍卖型网站", url: "https://www.gittigidiyor.com/", iconColor: "bg-blue-500", iconInitial: "G" },
      { id: "tr4", name: "N11", description: "土耳其新兴电商平台", url: "https://www.n11.com/", iconColor: "bg-red-600", iconInitial: "n11" },
    ]
  },
  {
    id: "netherlands",
    title: "荷兰网站 Netherlands",
    icon: Globe2,
    items: [
      { id: "nl1", name: "BOL", description: "荷兰和比利时买家首选的购物网站", url: "https://www.bol.com/nl/", iconColor: "bg-blue-800", iconInitial: "bol" },
      { id: "nl2", name: "Zalando", description: "主营服饰的在线时尚零售商", url: "https://www.zalando.nl/", iconColor: "bg-orange-500", iconInitial: "Z" },
      { id: "nl3", name: "速卖通", description: "速卖通荷兰站的全球市场渗透率排名第一", url: "https://nl.aliexpress.com/", iconColor: "bg-orange-600", iconInitial: "Ali" },
      { id: "nl4", name: "Coolblue", description: "电子产品及家庭用品百货商店", url: "https://www.coolblue.nl/", iconColor: "bg-blue-500", iconInitial: "cool" },
    ]
  },
  {
    id: "czech",
    title: "捷克网站 Czech",
    icon: Globe2,
    items: [
      { id: "cz1", name: "Hornbach", description: "德国广受关注的建材市场", url: "https://www.hornbach.cz/", iconColor: "bg-orange-500", iconInitial: "H" },
      { id: "cz2", name: "Favi", description: "捷克地区最大的家具和家装电商平台", url: "https://favi.cz/", iconColor: "bg-red-700", iconInitial: "FAVI" },
      { id: "cz3", name: "Baumax", description: "连锁超市Baumax在捷克开设的分站", url: "https://www.baumax.cz/", iconColor: "bg-yellow-500", iconInitial: "b" },
      { id: "cz4", name: "4Home", description: "4home在捷克开设的分站", url: "https://www.4home.cz/", iconColor: "bg-teal-500", iconInitial: "4H" },
      { id: "cz5", name: "Lidl.cz", description: "Lidl捷克站是捷克10个最佳购物平台之一", url: "https://www.lidl.cz/", iconColor: "bg-blue-600", iconInitial: "Lidl" },
    ]
  },
  {
    id: "slovakia",
    title: "斯洛伐克站 Slovakia",
    icon: Globe2,
    items: [
      { id: "sk1", name: "Mall", description: "销售家用电器，电子产品，笔记本电脑，电脑，户外等", url: "https://www.mall.sk/", iconColor: "bg-red-600", iconInitial: "M" },
      { id: "sk2", name: "Favi", description: "家具和装饰销售平台，汇集了450+电子商店和实体店", url: "https://favi.sk/", iconColor: "bg-red-800", iconInitial: "FAVI" },
      { id: "sk3", name: "Datart", description: "专注于销售电子产品的领先零售商", url: "https://www.datart.sk/", iconColor: "bg-blue-800", iconInitial: "Data" },
      { id: "sk4", name: "Alza", description: "随时随地快速便捷购物，为公司和个体经营者提供优惠", url: "https://www.alza.sk/", iconColor: "bg-green-500", iconInitial: "a" },
    ]
  },
  {
    id: "tools",
    title: "常用工具 Tools",
    icon: Wrench,
    items: [
      { id: "t1", name: "DeepL", description: "全球最准确的翻译工具", url: "https://www.deepl.com/", iconColor: "bg-blue-900", iconInitial: "D" },
      { id: "t2", name: "XE Currency", description: "实时汇率查询", url: "https://www.xe.com/", iconColor: "bg-blue-600", iconInitial: "X" },
      { id: "t3", name: "17Track", description: "全球物流查询平台", url: "https://www.17track.net/", iconColor: "bg-orange-500", iconInitial: "17" },
      { id: "t4", name: "Time.is", description: "世界时间查询", url: "https://time.is/", iconColor: "bg-black", iconInitial: "T" },
    ]
  }
];