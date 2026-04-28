import type { LocalizedLegalPageCopy } from "@/components/legal/legal-page";
import type { Locale } from "@/lib/i18n";

export const privacyCopy: Record<Locale, LocalizedLegalPageCopy> = {
  en: {
    metadataTitle: "Privacy Policy",
    metadataDescription:
      "Privacy Policy for skytree-tickets.com covering booking data, payments, analytics, and support handling.",
    title: "Privacy Policy",
    subtitle:
      "How Skytree Tickets handles visitor information submitted through this website.",
    sections: [
      {
        title: "1. Scope",
        body: [
          "This policy applies to skytree-tickets.com, the related booking flow, and the public support channels linked from this website.",
          "Skytree Tickets is an independent visitor booking and planning website for Tokyo Skytree. It is not the corporate website of the venue operator.",
        ],
      },
      {
        title: "2. Information We Collect",
        body: ["We may collect and process the following categories of information:"],
        bullets: [
          "Visitor details such as name, email address, phone number, country, and billing address entered during checkout.",
          "Booking details such as visit date, time slot, selected ticket plan, guest counts, and order reference.",
          "Technical usage data such as browser type, device information, IP-derived region, referral source, and pages viewed.",
        ],
      },
      {
        title: "3. Purpose of Use",
        body: ["Information is used to operate and improve the booking experience, including:"],
        bullets: [
          "Creating and preserving booking references during checkout.",
          "Redirecting visitors to the payment provider and returning them to the correct status page.",
          "Responding to booking, access, and visitor-support questions.",
          "Improving page performance, multilingual guidance, and conversion tracking.",
          "Detecting misuse, fraud, or operational issues.",
        ],
      },
      {
        title: "4. Payments and Service Providers",
        body: [
          "When you submit a booking, selected billing and order details may be sent to external service providers that support payment processing, hosting, analytics, and site delivery.",
          "Payment transactions are completed on third-party payment infrastructure and remain subject to that provider's own terms and privacy practices.",
        ],
      },
      {
        title: "5. Storage and Retention",
        body: [
          "This website may temporarily store booking-related information in the browser so that progress and booking references remain available on the same device.",
          "Operational records are retained only for as long as needed for support, analytics, fraud prevention, legal compliance, and service administration.",
        ],
      },
      {
        title: "6. Your Rights",
        body: [
          "Where applicable, you may request access to, correction of, or deletion of personal information associated with your booking or support request.",
          "You can also control cookies and similar technologies through your browser settings, although some parts of the booking flow may become limited.",
        ],
      },
      {
        title: "7. Contact",
        body: [
          "For privacy requests, booking-data questions, or legal notices, please use the support channels published on skytree-tickets.com/faq.",
          "Primary public domain: https://skytree-tickets.com",
        ],
      },
    ],
    lastUpdated: "Last updated: April 28, 2026",
  },
  ja: {
    metadataTitle: "プライバシーポリシー",
    metadataDescription:
      "skytree-tickets.com における予約情報、決済連携、解析、サポート対応に関する個人情報の取扱い方針です。",
    title: "プライバシーポリシー",
    subtitle: "Skytree Tickets が本サイトを通じて取得する情報の取り扱いについてご案内します。",
    sections: [
      {
        title: "1. 適用範囲",
        body: [
          "本ポリシーは、skytree-tickets.com、本サイト上の予約フロー、および本サイトから案内されるサポート窓口に適用されます。",
          "Skytree Tickets は東京スカイツリー来場者向けの独立系予約・案内サイトであり、施設運営者のコーポレートサイトではありません。",
        ],
      },
      {
        title: "2. 取得する情報",
        body: ["当サイトでは、次のような情報を取得・処理する場合があります。"],
        bullets: [
          "予約時に入力された氏名、メールアドレス、電話番号、国・地域、請求先住所などの来場者情報",
          "来場日、時間帯、券種、人数、注文番号などの予約情報",
          "ブラウザ種別、端末情報、接続地域、参照元、閲覧ページなどの技術情報",
        ],
      },
      {
        title: "3. 利用目的",
        body: ["取得した情報は、次の目的で利用します。"],
        bullets: [
          "予約フロー内での予約番号生成と進行状況の保持",
          "決済事業者への遷移と、決済後の戻りページの制御",
          "予約、アクセス、来場案内に関するお問い合わせ対応",
          "ページ性能、多言語案内、コンバージョン計測の改善",
          "不正利用、詐欺、運用上の問題の検知",
        ],
      },
      {
        title: "4. 決済および外部委託先",
        body: [
          "予約送信時には、決済処理、ホスティング、解析、サイト配信を支援する外部サービス事業者に対して、必要な請求情報および注文情報を共有する場合があります。",
          "決済そのものは第三者の決済基盤上で完了し、その取扱いは当該事業者の規約およびプライバシー方針にも従います。",
        ],
      },
      {
        title: "5. 保存と保管期間",
        body: [
          "同一端末上で予約の進行状況や予約番号を保持するため、予約関連情報の一部をブラウザ内に一時保存する場合があります。",
          "運用記録は、サポート対応、解析、不正防止、法令遵守、サービス運営に必要な期間に限って保管します。",
        ],
      },
      {
        title: "6. お客様の権利",
        body: [
          "適用法令の範囲内で、予約またはサポート対応に関連する個人情報について、開示、訂正、削除等を求めることができます。",
          "Cookie 等はブラウザ設定で制御できますが、予約機能の一部が制限される場合があります。",
        ],
      },
      {
        title: "7. お問い合わせ",
        body: [
          "個人情報や予約データに関するお問い合わせ、法的通知については、skytree-tickets.com/faq に掲載されたサポート窓口をご利用ください。",
          "公開ドメイン: https://skytree-tickets.com",
        ],
      },
    ],
    lastUpdated: "最終更新日: 2026年4月28日",
  },
  ko: {
    metadataTitle: "개인정보 처리방침",
    metadataDescription:
      "skytree-tickets.com의 예약 정보, 결제 연동, 분석, 고객 지원 관련 개인정보 처리 방침입니다.",
    title: "개인정보 처리방침",
    subtitle: "Skytree Tickets가 이 웹사이트를 통해 수집하는 정보의 처리 방식을 안내합니다.",
    sections: [
      {
        title: "1. 적용 범위",
        body: [
          "본 방침은 skytree-tickets.com, 이 사이트의 예약 흐름, 그리고 사이트에서 안내하는 고객 지원 채널에 적용됩니다.",
          "Skytree Tickets는 도쿄 스카이트리 방문객을 위한 독립형 예약 및 안내 사이트이며, 시설 운영사의 기업 웹사이트가 아닙니다.",
        ],
      },
      {
        title: "2. 수집하는 정보",
        body: ["다음과 같은 정보가 수집 및 처리될 수 있습니다."],
        bullets: [
          "예약 과정에서 입력한 이름, 이메일, 전화번호, 국가/지역, 청구지 주소 등의 방문객 정보",
          "방문 날짜, 시간대, 선택한 티켓 플랜, 인원 수, 주문 번호 등의 예약 정보",
          "브라우저 종류, 기기 정보, 접속 지역, 유입 경로, 열람 페이지 등의 기술 정보",
        ],
      },
      {
        title: "3. 이용 목적",
        body: ["수집한 정보는 다음 목적을 위해 사용됩니다."],
        bullets: [
          "예약 참조 번호 생성 및 결제 흐름 유지",
          "결제 제공업체로의 이동과 결제 완료 후 상태 페이지 복귀 처리",
          "예약, 교통, 방문 안내 관련 문의 대응",
          "페이지 성능, 다국어 안내, 전환 추적 개선",
          "오용, 사기, 운영상 문제 탐지",
        ],
      },
      {
        title: "4. 결제 및 외부 서비스 제공업체",
        body: [
          "예약 제출 시 결제 처리, 호스팅, 분석, 사이트 전달을 지원하는 외부 서비스 제공업체에 필요한 청구 정보와 주문 정보가 전달될 수 있습니다.",
          "결제 거래 자체는 제3자 결제 인프라에서 완료되며, 해당 제공업체의 약관 및 개인정보 처리방침이 함께 적용됩니다.",
        ],
      },
      {
        title: "5. 저장 및 보관 기간",
        body: [
          "같은 기기에서 예약 진행 상황과 예약 번호를 유지하기 위해 일부 정보가 브라우저에 임시 저장될 수 있습니다.",
          "운영 기록은 고객 지원, 분석, 부정 사용 방지, 법적 준수, 서비스 운영에 필요한 기간 동안만 보관됩니다.",
        ],
      },
      {
        title: "6. 이용자 권리",
        body: [
          "적용 가능한 법률 범위 내에서 예약 또는 고객 지원과 관련된 개인정보의 열람, 정정, 삭제를 요청할 수 있습니다.",
          "쿠키 및 유사 기술은 브라우저 설정에서 제어할 수 있으나, 일부 예약 기능이 제한될 수 있습니다.",
        ],
      },
      {
        title: "7. 문의",
        body: [
          "개인정보, 예약 데이터, 법적 통지와 관련된 문의는 skytree-tickets.com/faq에 안내된 지원 채널을 이용해 주세요.",
          "기본 공개 도메인: https://skytree-tickets.com",
        ],
      },
    ],
    lastUpdated: "최종 업데이트: 2026년 4월 28일",
  },
  "zh-CN": {
    metadataTitle: "隐私政策",
    metadataDescription:
      "适用于 skytree-tickets.com 的预订信息、支付跳转、分析与客服支持的隐私政策。",
    title: "隐私政策",
    subtitle: "说明 Skytree Tickets 如何处理通过本网站提交的访客信息。",
    sections: [
      {
        title: "1. 适用范围",
        body: [
          "本政策适用于 skytree-tickets.com、本网站的预订流程，以及本网站所链接的公开支持渠道。",
          "Skytree Tickets 是面向东京晴空塔访客的独立预订与行程规划网站，并非场馆运营方的企业官方网站。",
        ],
      },
      {
        title: "2. 收集的信息",
        body: ["我们可能收集和处理以下类别的信息："],
        bullets: [
          "在结账流程中填写的姓名、电子邮箱、电话号码、国家/地区和账单地址等访客信息",
          "参观日期、时间段、所选票种、人数和订单编号等预订信息",
          "浏览器类型、设备信息、IP 推断地区、来源渠道和页面浏览记录等技术数据",
        ],
      },
      {
        title: "3. 使用目的",
        body: ["相关信息将用于以下目的："],
        bullets: [
          "在预订流程中生成并保存订单参考编号",
          "将访客跳转至支付服务商，并在支付后返回正确的状态页面",
          "回复预订、交通和参观相关问题",
          "改进页面性能、多语言引导和转化追踪",
          "识别滥用、欺诈或运营问题",
        ],
      },
      {
        title: "4. 支付与服务提供商",
        body: [
          "提交预订时，部分账单信息和订单信息可能会发送给支持支付处理、托管、分析和网站交付的外部服务提供商。",
          "支付交易本身在第三方支付基础设施上完成，并同时受该服务商自身条款与隐私政策约束。",
        ],
      },
      {
        title: "5. 存储与保留",
        body: [
          "本网站可能会在浏览器中临时保存部分预订相关信息，以便在同一设备上保留进度和订单参考编号。",
          "运营记录仅在客服支持、分析、防欺诈、法律合规和服务管理所需期间内保留。",
        ],
      },
      {
        title: "6. 您的权利",
        body: [
          "在适用法律允许的范围内，您可以请求访问、更正或删除与预订或支持请求相关的个人信息。",
          "您也可以通过浏览器设置控制 Cookie 和类似技术，但部分预订功能可能因此受到限制。",
        ],
      },
      {
        title: "7. 联系方式",
        body: [
          "如需提交隐私请求、预订数据问题或法律通知，请使用 skytree-tickets.com/faq 页面公布的支持渠道。",
          "主公开域名: https://skytree-tickets.com",
        ],
      },
    ],
    lastUpdated: "最后更新：2026年4月28日",
  },
  "zh-TW": {
    metadataTitle: "隱私權政策",
    metadataDescription:
      "適用於 skytree-tickets.com 的預訂資料、付款跳轉、分析與客服支援之隱私權政策。",
    title: "隱私權政策",
    subtitle: "說明 Skytree Tickets 如何處理透過本網站提交的訪客資訊。",
    sections: [
      {
        title: "1. 適用範圍",
        body: [
          "本政策適用於 skytree-tickets.com、本網站的預訂流程，以及本網站所提供的公開支援管道。",
          "Skytree Tickets 是為東京晴空塔訪客打造的獨立預訂與行程規劃網站，並非場館營運方的企業官方網站。",
        ],
      },
      {
        title: "2. 蒐集的資訊",
        body: ["我們可能蒐集與處理以下類型的資訊："],
        bullets: [
          "結帳流程中填寫的姓名、電子郵件、電話、國家/地區與帳單地址等訪客資訊",
          "參觀日期、時段、所選票種、人數與訂單編號等預訂資訊",
          "瀏覽器類型、裝置資訊、IP 推估地區、來源管道與頁面瀏覽紀錄等技術資料",
        ],
      },
      {
        title: "3. 使用目的",
        body: ["相關資訊將用於以下目的："],
        bullets: [
          "於預訂流程中建立並保存訂單參考編號",
          "將訪客導向付款服務商，並在付款後返回對應狀態頁",
          "回覆預訂、交通與參觀相關問題",
          "改善頁面效能、多語系導覽與轉換追蹤",
          "偵測濫用、詐欺或營運問題",
        ],
      },
      {
        title: "4. 付款與服務提供者",
        body: [
          "提交預訂時，部分帳單資料與訂單資訊可能會傳送給支援付款處理、主機託管、分析與網站交付的外部服務提供者。",
          "付款交易本身於第三方付款基礎設施上完成，並同時受該服務提供者之條款與隱私權政策約束。",
        ],
      },
      {
        title: "5. 儲存與保留",
        body: [
          "本網站可能會在瀏覽器中暫時儲存部分預訂相關資訊，以便在同一裝置上保留流程進度與訂單參考編號。",
          "營運紀錄僅於客服支援、分析、防詐、法令遵循與服務管理所需期間內保留。",
        ],
      },
      {
        title: "6. 您的權利",
        body: [
          "在適用法律允許的範圍內，您可要求查閱、更正或刪除與預訂或支援請求相關的個人資料。",
          "您也可透過瀏覽器設定控制 Cookie 與類似技術，但部分預訂功能可能因此受限。",
        ],
      },
      {
        title: "7. 聯絡方式",
        body: [
          "如需提出隱私請求、預訂資料問題或法律通知，請使用 skytree-tickets.com/faq 所公布的支援管道。",
          "主要公開網域: https://skytree-tickets.com",
        ],
      },
    ],
    lastUpdated: "最後更新：2026年4月28日",
  },
  th: {
    metadataTitle: "นโยบายความเป็นส่วนตัว",
    metadataDescription:
      "นโยบายความเป็นส่วนตัวของ skytree-tickets.com สำหรับข้อมูลการจอง การชำระเงิน การวิเคราะห์ และการสนับสนุนผู้ใช้",
    title: "นโยบายความเป็นส่วนตัว",
    subtitle: "อธิบายว่า Skytree Tickets จัดการข้อมูลของผู้เข้าชมที่ส่งผ่านเว็บไซต์นี้อย่างไร",
    sections: [
      {
        title: "1. ขอบเขตการใช้งาน",
        body: [
          "นโยบายนี้ใช้กับ skytree-tickets.com ขั้นตอนการจองบนเว็บไซต์ และช่องทางสนับสนุนสาธารณะที่เชื่อมโยงจากเว็บไซต์นี้",
          "Skytree Tickets เป็นเว็บไซต์อิสระสำหรับการจองและวางแผนเที่ยว Tokyo Skytree และไม่ใช่เว็บไซต์องค์กรทางการของผู้ดำเนินการสถานที่",
        ],
      },
      {
        title: "2. ข้อมูลที่เราเก็บ",
        body: ["เราอาจเก็บและประมวลผลข้อมูลประเภทต่อไปนี้:"],
        bullets: [
          "ข้อมูลผู้เข้าชม เช่น ชื่อ อีเมล เบอร์โทร ประเทศ/ภูมิภาค และที่อยู่สำหรับเรียกเก็บเงินที่กรอกระหว่างเช็กเอาต์",
          "ข้อมูลการจอง เช่น วันที่เข้าชม ช่วงเวลา แพ็กเกจบัตร จำนวนผู้เข้าชม และเลขอ้างอิงคำสั่งซื้อ",
          "ข้อมูลทางเทคนิค เช่น ประเภทเบราว์เซอร์ อุปกรณ์ ภูมิภาคจาก IP แหล่งที่มา และหน้าที่เข้าชม",
        ],
      },
      {
        title: "3. วัตถุประสงค์ในการใช้ข้อมูล",
        body: ["ข้อมูลจะถูกใช้เพื่อวัตถุประสงค์ดังต่อไปนี้:"],
        bullets: [
          "สร้างและเก็บเลขอ้างอิงการจองระหว่างขั้นตอนเช็กเอาต์",
          "พาผู้ใช้ไปยังผู้ให้บริการชำระเงินและพากลับมายังหน้าสถานะที่ถูกต้องหลังชำระเงิน",
          "ตอบคำถามเกี่ยวกับการจอง การเดินทาง และการเข้าชม",
          "ปรับปรุงประสิทธิภาพหน้าเว็บ การแนะนำหลายภาษา และการติดตามคอนเวอร์ชัน",
          "ตรวจจับการใช้งานผิดปกติ การฉ้อโกง หรือปัญหาการดำเนินงาน",
        ],
      },
      {
        title: "4. การชำระเงินและผู้ให้บริการภายนอก",
        body: [
          "เมื่อคุณส่งการจอง ข้อมูลเรียกเก็บเงินและรายละเอียดคำสั่งซื้อบางส่วนอาจถูกส่งไปยังผู้ให้บริการภายนอกที่ช่วยด้านการชำระเงิน โฮสติ้ง การวิเคราะห์ และการให้บริการเว็บไซต์",
          "ธุรกรรมการชำระเงินจะเสร็จสิ้นบนระบบของผู้ให้บริการชำระเงินภายนอก และอยู่ภายใต้ข้อกำหนดและนโยบายความเป็นส่วนตัวของผู้ให้บริการรายนั้นด้วย",
        ],
      },
      {
        title: "5. การจัดเก็บและระยะเวลาการเก็บรักษา",
        body: [
          "เว็บไซต์นี้อาจเก็บข้อมูลการจองบางส่วนไว้ในเบราว์เซอร์ชั่วคราว เพื่อให้ความคืบหน้าและเลขอ้างอิงยังคงใช้งานได้บนอุปกรณ์เดิม",
          "บันทึกการดำเนินงานจะถูกเก็บไว้เท่าที่จำเป็นสำหรับการสนับสนุน การวิเคราะห์ การป้องกันการฉ้อโกง การปฏิบัติตามกฎหมาย และการบริหารบริการ",
        ],
      },
      {
        title: "6. สิทธิของคุณ",
        body: [
          "ภายใต้ขอบเขตที่กฎหมายอนุญาต คุณสามารถขอเข้าถึง แก้ไข หรือลบข้อมูลส่วนบุคคลที่เกี่ยวข้องกับการจองหรือคำขอช่วยเหลือได้",
          "คุณสามารถควบคุมคุกกี้และเทคโนโลยีที่คล้ายกันผ่านการตั้งค่าเบราว์เซอร์ได้ แต่บางส่วนของขั้นตอนการจองอาจทำงานได้ไม่เต็มที่",
        ],
      },
      {
        title: "7. การติดต่อ",
        body: [
          "หากต้องการส่งคำขอด้านความเป็นส่วนตัว คำถามเกี่ยวกับข้อมูลการจอง หรือหนังสือแจ้งทางกฎหมาย โปรดใช้ช่องทางสนับสนุนที่เผยแพร่ไว้ใน skytree-tickets.com/faq",
          "โดเมนสาธารณะหลัก: https://skytree-tickets.com",
        ],
      },
    ],
    lastUpdated: "อัปเดตล่าสุด: 28 เมษายน 2026",
  },
};

export const termsCopy: Record<Locale, LocalizedLegalPageCopy> = {
  en: {
    metadataTitle: "Terms of Use",
    metadataDescription:
      "Terms of Use for skytree-tickets.com covering website use, bookings, pricing, third-party payments, and legal notices.",
    title: "Terms of Use",
    subtitle:
      "Terms that apply to your use of the website, booking flow, and related visitor-planning services.",
    sections: [
      {
        title: "1. About This Website",
        body: [
          "Skytree Tickets is an independent booking and visitor-planning website for Tokyo Skytree.",
          "References to the attraction, venue operations, and official programs are provided to help visitors plan their trip, but this website is not the corporate website of the venue operator.",
        ],
      },
      {
        title: "2. Booking and Pricing",
        body: [
          "Bookings are subject to availability, operating conditions, and the details shown in the checkout flow at the time of purchase.",
          "Displayed prices, times, and ticket options may change by date, season, demand, or operational status.",
        ],
        bullets: [
          "Please review the selected visit date, time slot, and guest count carefully before completing payment.",
          "A booking reference may be generated before the final payment process is completed.",
          "Completion of a payment transaction depends on the external payment provider and any verification required on that side.",
        ],
      },
      {
        title: "3. Payments",
        body: [
          "Payment is completed on third-party payment infrastructure. When you continue from checkout, you may be redirected away from this website to complete the transaction.",
          "We are not responsible for temporary payment-provider downtime, bank authentication issues, or card-network interruptions outside our direct control.",
        ],
      },
      {
        title: "4. Availability, Changes, and Cancellations",
        body: [
          "Opening hours, floor access, events, and visitor operations may change due to weather, maintenance, crowd control, safety management, or venue-side decisions.",
          "If availability changes after a booking attempt, the final handling of payment and admission depends on the operating and payment status of that specific order.",
        ],
      },
      {
        title: "5. Website Use",
        body: ["By using this website, you agree not to:"],
        bullets: [
          "Attempt to misuse the checkout flow, analytics, or booking references.",
          "Interfere with site security, automated protections, or service availability.",
          "Copy or reuse website content for commercial purposes without permission.",
        ],
      },
      {
        title: "6. Intellectual Property",
        body: [
          "The design, text, editorial summaries, and booking-interface content published on this website belong to Skytree Tickets unless otherwise stated.",
          "Names, venue references, and third-party trademarks remain the property of their respective owners.",
        ],
      },
      {
        title: "7. Contact",
        body: [
          "Questions about these terms, booking flow, or site operation should be submitted through the support channels listed on skytree-tickets.com/faq.",
          "Primary public domain: https://skytree-tickets.com",
        ],
      },
    ],
    lastUpdated: "Last updated: April 28, 2026",
  },
  ja: {
    metadataTitle: "利用規約",
    metadataDescription:
      "skytree-tickets.com のサイト利用、予約フロー、価格表示、外部決済、法的通知に関する利用規約です。",
    title: "利用規約",
    subtitle: "本サイト、予約フロー、および来場計画支援サービスの利用に適用される条件です。",
    sections: [
      {
        title: "1. 本サイトについて",
        body: [
          "Skytree Tickets は、東京スカイツリー来場者向けの独立系予約・来場計画サイトです。",
          "施設情報や公式プログラムへの言及は来場計画の支援を目的としており、本サイトは施設運営者のコーポレートサイトではありません。",
        ],
      },
      {
        title: "2. 予約と料金表示",
        body: [
          "予約は空き状況、運営条件、および購入時点でチェックアウト画面に表示される内容に基づいて成立します。",
          "表示料金、入場時間、券種は、日付、季節、需要、運営状況により変更される場合があります。",
        ],
        bullets: [
          "決済前に来場日、時間帯、人数を必ずご確認ください。",
          "最終的な決済完了前に予約番号が発行される場合があります。",
          "決済完了は外部決済事業者の処理および認証状況に依存します。",
        ],
      },
      {
        title: "3. 決済について",
        body: [
          "決済は第三者の決済基盤上で完了します。チェックアウトから先に進むと、外部サイトへ遷移する場合があります。",
          "決済事業者の一時障害、銀行認証エラー、カードネットワーク障害など、当サイトが直接管理できない事象については責任を負いません。",
        ],
      },
      {
        title: "4. 営業状況、変更、キャンセル",
        body: [
          "営業時間、フロア入場、イベント、来場運営は、天候、保守、混雑、安全管理、施設側判断などにより変更される場合があります。",
          "予約後に状況が変わった場合の取扱いは、当該注文の運営状況および決済状況に応じて判断されます。",
        ],
      },
      {
        title: "5. サイト利用上の禁止事項",
        body: ["本サイトの利用にあたり、次の行為を禁止します。"],
        bullets: [
          "チェックアウト、解析、予約番号等の不正利用",
          "サイトのセキュリティ、保護機能、提供可用性を妨げる行為",
          "本サイト上のコンテンツを許可なく商用利用する行為",
        ],
      },
      {
        title: "6. 知的財産",
        body: [
          "本サイト上のデザイン、文章、編集要約、予約インターフェースに関するコンテンツは、別段の定めがない限り Skytree Tickets に帰属します。",
          "施設名、会場情報、第三者商標等はそれぞれの権利者に帰属します。",
        ],
      },
      {
        title: "7. お問い合わせ",
        body: [
          "本規約、予約フロー、サイト運営に関するお問い合わせは、skytree-tickets.com/faq に記載のサポート窓口からご連絡ください。",
          "公開ドメイン: https://skytree-tickets.com",
        ],
      },
    ],
    lastUpdated: "最終更新日: 2026年4月28日",
  },
  ko: {
    metadataTitle: "이용 약관",
    metadataDescription:
      "skytree-tickets.com의 사이트 이용, 예약 흐름, 가격 표시, 외부 결제, 법적 고지에 관한 약관입니다.",
    title: "이용 약관",
    subtitle: "웹사이트, 예약 흐름, 방문 계획 지원 서비스 이용에 적용되는 조건입니다.",
    sections: [
      {
        title: "1. 웹사이트 안내",
        body: [
          "Skytree Tickets는 도쿄 스카이트리 방문객을 위한 독립형 예약 및 방문 계획 사이트입니다.",
          "명소, 운영 정보, 공식 프로그램에 대한 언급은 방문 계획을 돕기 위한 것이며, 이 사이트는 시설 운영사의 기업 웹사이트가 아닙니다.",
        ],
      },
      {
        title: "2. 예약 및 가격",
        body: [
          "예약은 결제 시점의 체크아웃 화면에 표시된 가용성, 운영 조건, 세부 사항에 따라 처리됩니다.",
          "표시 가격, 시간, 티켓 옵션은 날짜, 시즌, 수요, 운영 상태에 따라 달라질 수 있습니다.",
        ],
        bullets: [
          "결제 전 방문 날짜, 시간, 인원 수를 반드시 확인해 주세요.",
          "최종 결제가 완료되기 전에 예약 참조 번호가 생성될 수 있습니다.",
          "결제 완료 여부는 외부 결제 제공업체의 처리 및 인증 절차에 따라 달라집니다.",
        ],
      },
      {
        title: "3. 결제",
        body: [
          "결제는 제3자 결제 인프라에서 완료됩니다. 체크아웃을 계속하면 외부 사이트로 이동할 수 있습니다.",
          "결제 제공업체의 일시적 장애, 은행 인증 문제, 카드 네트워크 중단 등 당사가 직접 통제할 수 없는 사유에 대해서는 책임을 지지 않습니다.",
        ],
      },
      {
        title: "4. 운영 변경 및 취소",
        body: [
          "운영 시간, 층별 입장, 이벤트, 방문 운영은 날씨, 유지보수, 혼잡, 안전 관리 또는 현장 운영 판단에 따라 변경될 수 있습니다.",
          "예약 시도 후 가용성이 변동된 경우, 해당 주문의 실제 운영 및 결제 상태에 따라 처리 방식이 달라집니다.",
        ],
      },
      {
        title: "5. 웹사이트 이용 제한",
        body: ["이 웹사이트를 이용할 때 다음 행위를 해서는 안 됩니다."],
        bullets: [
          "체크아웃, 분석 시스템, 예약 번호를 악용하는 행위",
          "사이트 보안, 자동 보호 기능, 서비스 가용성을 방해하는 행위",
          "허가 없이 사이트 콘텐츠를 상업적으로 복제하거나 재사용하는 행위",
        ],
      },
      {
        title: "6. 지식재산권",
        body: [
          "이 사이트의 디자인, 문구, 편집 요약, 예약 인터페이스 콘텐츠는 별도 명시가 없는 한 Skytree Tickets에 귀속됩니다.",
          "시설명, 장소 정보, 제3자 상표는 각 권리자에게 귀속됩니다.",
        ],
      },
      {
        title: "7. 문의",
        body: [
          "약관, 예약 흐름, 사이트 운영과 관련된 문의는 skytree-tickets.com/faq에 안내된 지원 채널로 보내 주세요.",
          "기본 공개 도메인: https://skytree-tickets.com",
        ],
      },
    ],
    lastUpdated: "최종 업데이트: 2026년 4월 28일",
  },
  "zh-CN": {
    metadataTitle: "使用条款",
    metadataDescription:
      "适用于 skytree-tickets.com 的网站使用、预订流程、价格显示、第三方支付和法律通知条款。",
    title: "使用条款",
    subtitle: "适用于本网站、预订流程及访客行程规划服务的使用条件。",
    sections: [
      {
        title: "1. 关于本网站",
        body: [
          "Skytree Tickets 是面向东京晴空塔访客的独立预订与行程规划网站。",
          "网站中提及景点、场馆运营和官方活动，是为了帮助访客规划行程，并不代表本网站属于场馆运营方。",
        ],
      },
      {
        title: "2. 预订与价格",
        body: [
          "预订取决于库存、运营状态以及结账时页面所显示的具体信息。",
          "页面显示的价格、时间和票种可能因日期、季节、需求或运营状态而调整。",
        ],
        bullets: [
          "请在付款前仔细确认参观日期、时段和人数。",
          "在最终支付完成前，系统可能会先生成订单参考编号。",
          "支付是否成功取决于第三方支付服务商及其认证流程。",
        ],
      },
      {
        title: "3. 支付",
        body: [
          "支付在第三方支付基础设施上完成。继续结账时，您可能会被跳转到本站之外的页面完成交易。",
          "对于支付服务商临时故障、银行验证失败或卡组织网络中断等超出本站直接控制范围的情况，我们不承担责任。",
        ],
      },
      {
        title: "4. 营运变更与取消",
        body: [
          "营业时间、楼层开放、活动安排和现场访客运营可能因天气、维护、客流、安全管理或场馆方决定而调整。",
          "若在预订尝试后可用性发生变化，具体处理方式将取决于该订单对应的营运和支付状态。",
        ],
      },
      {
        title: "5. 网站使用限制",
        body: ["使用本网站即表示您同意不会进行以下行为："],
        bullets: [
          "滥用结账流程、分析系统或订单参考编号",
          "干扰网站安全、自动防护机制或服务可用性",
          "未经许可复制或商用网站内容",
        ],
      },
      {
        title: "6. 知识产权",
        body: [
          "除另有说明外，本网站的设计、文案、编辑摘要和预订界面内容均归 Skytree Tickets 所有。",
          "景点名称、场馆信息和第三方商标归其各自权利人所有。",
        ],
      },
      {
        title: "7. 联系方式",
        body: [
          "有关本条款、预订流程或网站运营的问题，请通过 skytree-tickets.com/faq 公布的支持渠道联系我们。",
          "主公开域名: https://skytree-tickets.com",
        ],
      },
    ],
    lastUpdated: "最后更新：2026年4月28日",
  },
  "zh-TW": {
    metadataTitle: "使用條款",
    metadataDescription:
      "適用於 skytree-tickets.com 的網站使用、預訂流程、價格顯示、第三方付款與法律通知條款。",
    title: "使用條款",
    subtitle: "適用於本網站、預訂流程與訪客行程規劃服務的使用條件。",
    sections: [
      {
        title: "1. 關於本網站",
        body: [
          "Skytree Tickets 是為東京晴空塔訪客打造的獨立預訂與行程規劃網站。",
          "本網站提及景點、場館營運與官方活動，目的是協助訪客規劃行程，並不代表本網站屬於場館營運方。",
        ],
      },
      {
        title: "2. 預訂與價格",
        body: [
          "預訂是否成立取決於庫存、營運條件以及結帳時頁面所顯示的具體資訊。",
          "頁面顯示的價格、時段與票種可能因日期、季節、需求或營運狀況而調整。",
        ],
        bullets: [
          "請在付款前再次確認參觀日期、時段與人數。",
          "在最終付款完成前，系統可能先產生訂單參考編號。",
          "付款是否成功取決於第三方付款服務商及其驗證流程。",
        ],
      },
      {
        title: "3. 付款",
        body: [
          "付款於第三方付款基礎設施上完成。繼續結帳時，您可能會被導向本站以外的頁面完成交易。",
          "對於付款服務商暫時性故障、銀行驗證問題或卡片網路中斷等超出本站直接控制範圍的情況，我們不承擔責任。",
        ],
      },
      {
        title: "4. 營運變更與取消",
        body: [
          "營業時間、樓層開放、活動安排與現場訪客營運可能因天候、維護、客流、安全管理或場館方決定而調整。",
          "若在預訂嘗試後可用性發生變化，具體處理方式將取決於該訂單的營運與付款狀態。",
        ],
      },
      {
        title: "5. 網站使用限制",
        body: ["使用本網站即表示您同意不會進行以下行為："],
        bullets: [
          "濫用結帳流程、分析系統或訂單參考編號",
          "干擾網站安全、自動保護機制或服務可用性",
          "未經許可複製或商業使用網站內容",
        ],
      },
      {
        title: "6. 智慧財產權",
        body: [
          "除另有說明外，本網站的設計、文案、編輯摘要與預訂介面內容均屬 Skytree Tickets 所有。",
          "景點名稱、場館資訊與第三方商標屬於各自權利人所有。",
        ],
      },
      {
        title: "7. 聯絡方式",
        body: [
          "如對本條款、預訂流程或網站營運有疑問，請透過 skytree-tickets.com/faq 公布的支援管道與我們聯絡。",
          "主要公開網域: https://skytree-tickets.com",
        ],
      },
    ],
    lastUpdated: "最後更新：2026年4月28日",
  },
  th: {
    metadataTitle: "ข้อกำหนดการใช้งาน",
    metadataDescription:
      "ข้อกำหนดการใช้งานสำหรับ skytree-tickets.com ครอบคลุมการใช้งานเว็บไซต์ การจอง การแสดงราคา การชำระเงินผ่านบุคคลที่สาม และการแจ้งทางกฎหมาย",
    title: "ข้อกำหนดการใช้งาน",
    subtitle: "เงื่อนไขที่ใช้กับเว็บไซต์ ขั้นตอนการจอง และบริการช่วยวางแผนการเข้าชม",
    sections: [
      {
        title: "1. เกี่ยวกับเว็บไซต์นี้",
        body: [
          "Skytree Tickets เป็นเว็บไซต์อิสระสำหรับการจองและวางแผนการเข้าชม Tokyo Skytree",
          "การอ้างอิงถึงสถานที่ การดำเนินงานของสถานที่ และโปรแกรมทางการ มีไว้เพื่อช่วยให้ผู้เข้าชมวางแผนการเดินทาง และไม่ได้หมายความว่าเว็บไซต์นี้เป็นเว็บไซต์องค์กรของผู้ดำเนินการสถานที่",
        ],
      },
      {
        title: "2. การจองและราคา",
        body: [
          "การจองขึ้นอยู่กับจำนวนที่ว่าง สถานะการดำเนินงาน และรายละเอียดที่แสดงในขั้นตอนเช็กเอาต์ ณ เวลาที่ชำระเงิน",
          "ราคา เวลา และตัวเลือกบัตรที่แสดงอาจเปลี่ยนแปลงตามวันที่ ฤดูกาล ความต้องการ หรือสถานะการดำเนินงาน",
        ],
        bullets: [
          "โปรดตรวจสอบวันที่เข้าชม ช่วงเวลา และจำนวนผู้เข้าชมอย่างละเอียดก่อนชำระเงิน",
          "ระบบอาจสร้างเลขอ้างอิงการจองก่อนที่ขั้นตอนการชำระเงินจริงจะเสร็จสมบูรณ์",
          "การชำระเงินจะถือว่าเสร็จสิ้นต่อเมื่อผู้ให้บริการชำระเงินภายนอกดำเนินการและยืนยันเรียบร้อยแล้ว",
        ],
      },
      {
        title: "3. การชำระเงิน",
        body: [
          "การชำระเงินเสร็จสิ้นบนโครงสร้างพื้นฐานของผู้ให้บริการชำระเงินภายนอก เมื่อคุณดำเนินการต่อจากเช็กเอาต์ คุณอาจถูกพาไปยังหน้าเว็บภายนอกเว็บไซต์นี้",
          "เราไม่รับผิดชอบต่อการหยุดให้บริการชั่วคราวของผู้ให้บริการชำระเงิน ปัญหาการยืนยันจากธนาคาร หรือการขัดข้องของเครือข่ายบัตรที่อยู่นอกเหนือการควบคุมโดยตรงของเรา",
        ],
      },
      {
        title: "4. การเปลี่ยนแปลงและการยกเลิก",
        body: [
          "เวลาเปิดทำการ การเข้าถึงแต่ละชั้น อีเวนต์ และการดำเนินงานสำหรับผู้เข้าชมอาจเปลี่ยนแปลงได้จากสภาพอากาศ การบำรุงรักษา ความหนาแน่น ความปลอดภัย หรือการตัดสินใจของสถานที่",
          "หากสถานะการให้บริการเปลี่ยนหลังจากมีการพยายามจอง การดำเนินการสุดท้ายจะขึ้นอยู่กับสถานะการดำเนินงานและสถานะการชำระเงินของคำสั่งซื้อนั้น",
        ],
      },
      {
        title: "5. การใช้งานเว็บไซต์",
        body: ["เมื่อใช้เว็บไซต์นี้ คุณตกลงว่าจะไม่กระทำสิ่งต่อไปนี้:"],
        bullets: [
          "ใช้งานขั้นตอนเช็กเอาต์ ระบบวิเคราะห์ หรือเลขอ้างอิงการจองในทางที่ผิด",
          "รบกวนความปลอดภัย ระบบป้องกันอัตโนมัติ หรือความพร้อมให้บริการของเว็บไซต์",
          "คัดลอกหรือนำเนื้อหาบนเว็บไซต์ไปใช้เชิงพาณิชย์โดยไม่ได้รับอนุญาต",
        ],
      },
      {
        title: "6. ทรัพย์สินทางปัญญา",
        body: [
          "เว้นแต่จะระบุไว้เป็นอย่างอื่น การออกแบบ ข้อความ สรุปเชิงบรรณาธิการ และเนื้อหาของอินเทอร์เฟซการจองบนเว็บไซต์นี้เป็นทรัพย์สินของ Skytree Tickets",
          "ชื่อสถานที่ ข้อมูลสถานที่ และเครื่องหมายการค้าของบุคคลที่สามเป็นทรัพย์สินของเจ้าของสิทธิ์แต่ละราย",
        ],
      },
      {
        title: "7. การติดต่อ",
        body: [
          "หากมีคำถามเกี่ยวกับข้อกำหนดนี้ ขั้นตอนการจอง หรือการดำเนินงานของเว็บไซต์ โปรดใช้ช่องทางสนับสนุนที่ระบุไว้ใน skytree-tickets.com/faq",
          "โดเมนสาธารณะหลัก: https://skytree-tickets.com",
        ],
      },
    ],
    lastUpdated: "อัปเดตล่าสุด: 28 เมษายน 2026",
  },
};
