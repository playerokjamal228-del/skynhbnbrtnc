import type { LocalizedLegalPageCopy } from "@/components/legal/legal-page";
import type { Locale } from "@/lib/i18n";

export const privacyCopy: Record<Locale, LocalizedLegalPageCopy> = {
  en: {
    metadataTitle: "Privacy Policy",
    metadataDescription:
      "Tokyo Skytree Privacy Policy covering the visitor data used for bookings, support, and website operations.",
    title: "Privacy Policy",
    subtitle: "How we handle visitor information across bookings and site usage.",
    sections: [
      {
        title: "1. Scope",
        body: [
          "This policy explains how Tokyo Skytree handles personal information submitted through this website, including booking requests, visitor support inquiries, and basic analytics used to improve public information.",
        ],
      },
      {
        title: "2. Information We Handle",
        body: ["We may handle the following categories of information:"],
        bullets: [
          "Visitor details such as name, email address, country or region, and optional profile information entered during a booking flow.",
          "Reservation details such as selected date, time slot, ticket type, and number of guests.",
          "Technical usage data such as browser type, device information, IP-derived region, and pages viewed.",
        ],
      },
      {
        title: "3. Purpose of Use",
        body: ["Information is used to support the public visitor experience, including:"],
        bullets: [
          "Displaying and maintaining booking references.",
          "Responding to support requests and visit-related questions.",
          "Improving page performance, navigation, and multilingual visitor guidance.",
          "Detecting misuse, fraud, or operational issues.",
        ],
      },
      {
        title: "4. Storage and Retention",
        body: [
          "This website may temporarily store booking-related information in the browser to preserve progress and booking references on the same device.",
          "Operational records are retained only for as long as needed for visitor support, legal compliance, and service administration.",
        ],
      },
      {
        title: "5. Sharing",
        body: [
          "We do not sell personal information. Data may be shared only with service providers that help operate hosting, analytics, or payment-related infrastructure, or where disclosure is required by law.",
        ],
      },
      {
        title: "6. Your Choices",
        body: [
          "You may request access, correction, or deletion of personal information where applicable under Japanese law and other relevant regulations.",
          "You can also control cookies and similar technologies through your browser settings, although some functions may become limited.",
        ],
      },
      {
        title: "7. Contact",
        body: [
          "Questions about privacy practices can be directed to the Tokyo Skytree Information Desk.",
          "1-1-2 Oshiage, Sumida-ku, Tokyo 131-0045, Japan",
          "Phone: +81-3-5302-3470",
        ],
      },
    ],
    lastUpdated: "Last updated: April 17, 2026",
  },
  ja: {
    metadataTitle: "プライバシーポリシー",
    metadataDescription:
      "チケット予約、来場案内、お問い合わせ対応に関する個人情報の取り扱いについてご案内します。",
    title: "プライバシーポリシー",
    subtitle: "予約情報やサイト利用時の個人情報の取り扱いについてご案内します。",
    sections: [
      {
        title: "1. 適用範囲",
        body: [
          "本ポリシーは、本サイトでのチケット予約、お問い合わせ、来場案内、ならびにサイト改善のための基本的な利用状況の計測に関連して、TOKYO SKYTREEが取り扱う個人情報について説明するものです。",
        ],
      },
      {
        title: "2. 取得する情報",
        body: ["当サイトでは、次のような情報を取り扱う場合があります。"],
        bullets: [
          "予約時に入力された氏名、メールアドレス、居住国・地域、その他任意項目",
          "来場日、入場時間、券種、来場人数などの予約情報",
          "ブラウザ種別、端末情報、アクセス地域、閲覧ページなどの技術情報",
        ],
      },
      {
        title: "3. 利用目的",
        body: ["取得した情報は、次の目的で利用します。"],
        bullets: [
          "予約内容の表示および予約番号の管理",
          "お問い合わせ対応および来場案内",
          "ページ表示、導線、多言語案内の改善",
          "不正利用や運用上の問題の検知",
        ],
      },
      {
        title: "4. 保存と保管期間",
        body: [
          "本サイトでは、同一端末で予約情報を確認できるよう、予約に関する一部情報をブラウザ内に一時保存する場合があります。",
          "運用記録は、来場者対応、法令遵守、サービス運営に必要な期間に限って保管します。",
        ],
      },
      {
        title: "5. 第三者提供",
        body: [
          "個人情報を販売することはありません。ホスティング、解析、決済などの運用委託先に必要な範囲で共有する場合、または法令に基づき開示する場合があります。",
        ],
      },
      {
        title: "6. お客様の権利",
        body: [
          "法令で認められる範囲で、開示、訂正、削除等を請求いただけます。",
          "Cookie等の利用はブラウザ設定で制御できますが、一部機能が制限される場合があります。",
        ],
      },
      {
        title: "7. お問い合わせ",
        body: [
          "個人情報の取り扱いに関するお問い合わせは、東京スカイツリー インフォメーションデスクまでご連絡ください。",
          "〒131-0045 東京都墨田区押上1-1-2",
          "電話: +81-3-5302-3470",
        ],
      },
    ],
    lastUpdated: "最終更新日: 2026年4月17日",
  },
  ko: {
    metadataTitle: "개인정보 처리방침",
    metadataDescription:
      "예약, 방문 안내, 사이트 운영 과정에서 취급하는 개인정보에 대한 안내입니다.",
    title: "개인정보 처리방침",
    subtitle: "예약 정보와 사이트 이용 정보가 어떻게 처리되는지 안내합니다.",
    sections: [
      {
        title: "1. 적용 범위",
        body: [
          "본 방침은 이 웹사이트를 통한 예약, 문의, 방문 안내 및 사이트 개선을 위한 기본 이용 분석 과정에서 TOKYO SKYTREE가 취급하는 개인정보에 적용됩니다.",
        ],
      },
      {
        title: "2. 수집 항목",
        body: ["다음과 같은 정보가 처리될 수 있습니다."],
        bullets: [
          "예약 과정에서 입력한 이름, 이메일, 국가/지역 및 선택 입력 정보",
          "방문 날짜, 시간, 티켓 종류, 방문 인원 등 예약 정보",
          "브라우저 종류, 기기 정보, 접속 지역, 열람 페이지 등 기술 정보",
        ],
      },
      {
        title: "3. 이용 목적",
        body: ["수집한 정보는 다음 목적을 위해 사용됩니다."],
        bullets: [
          "예약 확인 정보와 참조 번호 표시",
          "방문 관련 문의 응대",
          "페이지 성능, 동선, 다국어 안내 개선",
          "오용 및 운영상 문제 탐지",
        ],
      },
      {
        title: "4. 보관",
        body: [
          "이 웹사이트에서는 같은 기기에서 예약 진행 상황을 유지하기 위해 일부 예약 관련 정보가 브라우저에 임시 저장될 수 있습니다.",
          "운영 기록은 고객 지원, 법적 의무, 서비스 운영에 필요한 기간 동안만 보관됩니다.",
        ],
      },
      {
        title: "5. 제공",
        body: [
          "개인정보를 판매하지 않습니다. 다만 호스팅, 분석, 결제 관련 운영 지원 업체 또는 법률상 요구가 있는 경우에 한해 공유될 수 있습니다.",
        ],
      },
      {
        title: "6. 이용자 권리",
        body: [
          "관련 법령에 따라 열람, 정정, 삭제를 요청할 수 있습니다.",
          "쿠키는 브라우저 설정에서 제어할 수 있으나 일부 기능이 제한될 수 있습니다.",
        ],
      },
      {
        title: "7. 문의",
        body: [
          "개인정보 처리에 관한 문의는 TOKYO SKYTREE Information Desk로 연락해 주세요.",
          "1-1-2 Oshiage, Sumida-ku, Tokyo 131-0045, Japan",
          "전화: +81-3-5302-3470",
        ],
      },
    ],
    lastUpdated: "최종 업데이트: 2026년 4월 17일",
  },
  "zh-CN": {
    metadataTitle: "隐私政策",
    metadataDescription: "说明东京晴空塔在预约、访客咨询和网站运营中如何处理个人信息。",
    title: "隐私政策",
    subtitle: "说明预约信息与网站使用信息的处理方式。",
    sections: [
      {
        title: "1. 适用范围",
        body: [
          "本政策适用于 TOKYO SKYTREE 在本网站预约、咨询、参观指引以及为改进公开信息而进行的基础访问分析过程中处理的个人信息。",
        ],
      },
      {
        title: "2. 处理的信息",
        body: ["我们可能处理以下类别的信息："],
        bullets: [
          "预约流程中填写的姓名、电子邮箱、国家或地区及其他可选资料",
          "参观日期、入场时间、票种及人数等预约信息",
          "浏览器类型、设备信息、访问地区及浏览页面等技术信息",
        ],
      },
      {
        title: "3. 使用目的",
        body: ["相关信息用于支持访客体验，包括："],
        bullets: [
          "显示和保存预约参考信息",
          "回复咨询和参观相关问题",
          "改进页面性能、导览路径和多语言信息",
          "检测滥用、欺诈或运营问题",
        ],
      },
      {
        title: "4. 保存",
        body: [
          "本网站可能会在浏览器中临时保存部分预约相关信息，以便在同一设备上保留预约进度和参考编号。",
          "运营记录仅在访客支持、法律合规和服务管理所需期间内保留。",
        ],
      },
      {
        title: "5. 共享",
        body: [
          "我们不会出售个人信息。信息仅会在托管、分析、支付相关基础设施支持或法律要求的情况下共享。",
        ],
      },
      {
        title: "6. 您的选择",
        body: [
          "在适用法律允许的范围内，您可以请求访问、更正或删除相关个人信息。",
          "您也可以通过浏览器设置控制 Cookie，但部分功能可能因此受限。",
        ],
      },
      {
        title: "7. 联系方式",
        body: [
          "如对隐私处理有疑问，请联系 TOKYO SKYTREE Information Desk。",
          "日本东京都墨田区押上 1-1-2，邮编 131-0045",
          "电话: +81-3-5302-3470",
        ],
      },
    ],
    lastUpdated: "最后更新：2026年4月17日",
  },
  "zh-TW": {
    metadataTitle: "隱私政策",
    metadataDescription: "說明東京晴空塔在預約、訪客諮詢與網站營運中如何處理個人資料。",
    title: "隱私政策",
    subtitle: "說明預約資料與網站使用資料的處理方式。",
    sections: [
      {
        title: "1. 適用範圍",
        body: [
          "本政策適用於 TOKYO SKYTREE 透過本網站提供預約、諮詢、參觀導覽，以及為改善公開資訊而進行基礎流量分析時所處理的個人資料。",
        ],
      },
      {
        title: "2. 處理的資料",
        body: ["我們可能處理下列類型的資訊："],
        bullets: [
          "預約流程中填寫的姓名、電子郵件、國家或地區及其他選填資訊",
          "參觀日期、入場時段、票種與人數等預約資訊",
          "瀏覽器類型、裝置資訊、存取地區與瀏覽頁面等技術資訊",
        ],
      },
      {
        title: "3. 使用目的",
        body: ["相關資訊主要用於支援訪客體驗，包括："],
        bullets: [
          "顯示並維持預約參考資訊",
          "回覆訪客諮詢與行程問題",
          "改善頁面效能、導覽動線與多語系內容",
          "偵測濫用、詐欺或營運問題",
        ],
      },
      {
        title: "4. 保存",
        body: [
          "本網站可能會暫時將部分預約資訊儲存在瀏覽器中，以便在同一裝置上保留預約進度與參考編號。",
          "營運紀錄僅在訪客支援、法令遵循與服務管理所需期間內保存。",
        ],
      },
      {
        title: "5. 共享",
        body: [
          "我們不會出售個人資料。僅在網站託管、分析、支付相關基礎設施支援或法律要求下，才會與必要服務供應商共享資訊。",
        ],
      },
      {
        title: "6. 您的選擇",
        body: [
          "在適用法令範圍內，您可要求查閱、更正或刪除相關個人資料。",
          "您也可透過瀏覽器設定管理 Cookie，但部分功能可能因此受限。",
        ],
      },
      {
        title: "7. 聯絡方式",
        body: [
          "如對隱私處理有疑問，請洽 TOKYO SKYTREE Information Desk。",
          "日本東京都墨田區押上 1-1-2，131-0045",
          "電話: +81-3-5302-3470",
        ],
      },
    ],
    lastUpdated: "最後更新：2026年4月17日",
  },
  th: {
    metadataTitle: "นโยบายความเป็นส่วนตัว",
    metadataDescription:
      "อธิบายการจัดการข้อมูลส่วนบุคคลสำหรับการจอง การสอบถาม และการใช้งานเว็บไซต์ Tokyo Skytree",
    title: "นโยบายความเป็นส่วนตัว",
    subtitle: "อธิบายวิธีจัดการข้อมูลการจองและข้อมูลการใช้งานเว็บไซต์ของผู้เข้าชม",
    sections: [
      {
        title: "1. ขอบเขต",
        body: [
          "นโยบายนี้อธิบายการจัดการข้อมูลส่วนบุคคลที่ TOKYO SKYTREE ใช้ผ่านเว็บไซต์นี้ในการจอง การสอบถาม การให้ข้อมูลการเข้าชม และการวิเคราะห์พื้นฐานเพื่อปรับปรุงข้อมูลสาธารณะของเว็บไซต์",
        ],
      },
      {
        title: "2. ข้อมูลที่อาจจัดเก็บ",
        body: ["เราอาจจัดการข้อมูลประเภทต่อไปนี้:"],
        bullets: [
          "ชื่อ อีเมล ประเทศหรือภูมิภาค และข้อมูลเพิ่มเติมที่กรอกระหว่างการจอง",
          "วันที่เข้าชม ช่วงเวลา ประเภทบัตร และจำนวนผู้เข้าชม",
          "ประเภทเบราว์เซอร์ ข้อมูลอุปกรณ์ พื้นที่การเข้าถึง และหน้าที่เข้าชม",
        ],
      },
      {
        title: "3. วัตถุประสงค์การใช้ข้อมูล",
        body: ["ข้อมูลดังกล่าวใช้เพื่อสนับสนุนประสบการณ์ของผู้เข้าชม เช่น"],
        bullets: [
          "แสดงและจัดเก็บหมายเลขอ้างอิงการจอง",
          "ตอบคำถามและให้ความช่วยเหลือเกี่ยวกับการเข้าชม",
          "ปรับปรุงประสิทธิภาพหน้าเว็บ การนำทาง และข้อมูลหลายภาษา",
          "ตรวจจับการใช้งานผิดปกติ การทุจริต หรือปัญหาด้านปฏิบัติการ",
        ],
      },
      {
        title: "4. การจัดเก็บ",
        body: [
          "เว็บไซต์นี้อาจจัดเก็บข้อมูลการจองบางส่วนไว้ในเบราว์เซอร์ชั่วคราว เพื่อรักษาความต่อเนื่องของการจองและหมายเลขอ้างอิงบนอุปกรณ์เดิม",
          "บันทึกการดำเนินงานจะเก็บไว้เท่าที่จำเป็นต่อการสนับสนุนผู้เข้าชม การปฏิบัติตามกฎหมาย และการบริหารบริการ",
        ],
      },
      {
        title: "5. การเปิดเผยข้อมูล",
        body: [
          "เราไม่ขายข้อมูลส่วนบุคคล ข้อมูลอาจถูกแบ่งปันเฉพาะกับผู้ให้บริการที่ช่วยดูแลโฮสติ้ง การวิเคราะห์ หรือโครงสร้างพื้นฐานด้านการชำระเงิน หรือเมื่อกฎหมายกำหนดเท่านั้น",
        ],
      },
      {
        title: "6. สิทธิของผู้ใช้",
        body: [
          "ตามกฎหมายที่เกี่ยวข้อง คุณสามารถขอเข้าถึง แก้ไข หรือลบข้อมูลส่วนบุคคลได้",
          "คุณสามารถควบคุมคุกกี้ผ่านการตั้งค่าเบราว์เซอร์ได้ แต่บางฟังก์ชันอาจใช้งานได้ไม่เต็มที่",
        ],
      },
      {
        title: "7. ติดต่อ",
        body: [
          "หากมีคำถามเกี่ยวกับการคุ้มครองข้อมูลส่วนบุคคล โปรดติดต่อ TOKYO SKYTREE Information Desk",
          "1-1-2 Oshiage, Sumida-ku, Tokyo 131-0045, Japan",
          "โทรศัพท์: +81-3-5302-3470",
        ],
      },
    ],
    lastUpdated: "อัปเดตล่าสุด: 17 เมษายน 2026",
  },
};

export const termsCopy: Record<Locale, LocalizedLegalPageCopy> = {
  en: {
    metadataTitle: "Terms of Use",
    metadataDescription:
      "Tokyo Skytree Terms of Use covering online bookings, visitor conduct, refunds, and general website conditions.",
    title: "Terms of Use",
    subtitle: "Conditions that apply to the website, bookings, and on-site visits.",
    sections: [
      {
        title: "1. Acceptance",
        body: [
          "By using this website and the booking flow, you agree to these terms. If you do not agree, please do not continue using the service.",
        ],
      },
      {
        title: "2. Booking Conditions",
        body: [
          "Reservations are subject to availability and are considered completed when a booking reference is displayed on screen.",
          "Ticket prices may be displayed in USD on English-language pages for convenience, while checkout and settlement are processed in Japanese Yen. Prices may also change by season, date, time slot, or plan.",
        ],
        bullets: [
          "Please review the selected visit date, ticket type, and guest count before confirming.",
          "A booking reference should be retained and presented if requested on the day of the visit.",
          "Some experiences, campaigns, and floor access may have additional conditions announced on their respective pages.",
        ],
      },
      {
        title: "3. Changes, Cancellation, and Suspension",
        body: [
          "Operational hours, admission windows, and specific facilities may change because of weather, maintenance, congestion, safety management, or event operation.",
          "Where a closure or suspension affects a reservation, guidance will be provided according to the operating conditions in effect at that time.",
        ],
      },
      {
        title: "4. Visitor Conduct",
        body: ["Visitors are expected to follow staff guidance and posted notices throughout the facility."],
        bullets: [
          "Do not bring prohibited or dangerous items into the venue.",
          "Do not interfere with the comfort, safety, or viewing experience of other guests.",
          "Photography equipment or activities that block circulation may be restricted.",
          "Additional rules may apply to observation decks, event venues, and special exhibitions.",
        ],
      },
      {
        title: "5. Website Content",
        body: [
          "We aim to keep information accurate and current, but schedules, promotions, and floor information may change without prior notice.",
          "Links to external websites are provided for convenience and remain subject to the terms and policies of those third parties.",
        ],
      },
      {
        title: "6. Intellectual Property",
        body: [
          "Texts, images, visual assets, and branding displayed on this site belong to Tokyo Skytree or their respective rights holders. Personal trip-planning use is allowed, but redistribution or commercial reuse requires permission.",
        ],
      },
      {
        title: "7. Contact",
        body: [
          "Questions about these terms can be directed to the Tokyo Skytree Information Desk.",
          "1-1-2 Oshiage, Sumida-ku, Tokyo 131-0045, Japan",
          "Phone: +81-3-5302-3470",
        ],
      },
    ],
    lastUpdated: "Last updated: April 17, 2026",
  },
  ja: {
    metadataTitle: "利用規約",
    metadataDescription:
      "ウェブサイト利用、チケット予約、来場時のルールに関する利用条件をご案内します。",
    title: "利用規約",
    subtitle: "サイト利用、予約手続き、来場時に適用される条件についてご案内します。",
    sections: [
      {
        title: "1. 規約への同意",
        body: [
          "本サイトおよび予約機能をご利用いただくことで、本規約に同意したものとみなします。ご同意いただけない場合は、サービスのご利用をお控えください。",
        ],
      },
      {
        title: "2. 予約に関する条件",
        body: [
          "予約は空き状況により変動し、画面上に予約番号が表示された時点で手続き完了となります。",
          "料金は日本円で表示され、時期、来場日、時間帯、券種によって変動する場合があります。",
        ],
        bullets: [
          "確定前に来場日、券種、人数を必ずご確認ください。",
          "来場時に必要となる場合があるため、予約番号は控えておいてください。",
          "特別営業、イベント、キャンペーン、特定フロアの利用には別途条件が設けられる場合があります。",
        ],
      },
      {
        title: "3. 変更・中止・制限",
        body: [
          "天候、保守点検、混雑、安全管理、イベント運営等の事情により、営業時間、入場時間、施設内容が変更または制限される場合があります。",
          "営業変更や中止が予約に影響する場合は、その時点の運営条件に基づいてご案内します。",
        ],
      },
      {
        title: "4. ご来場時のお願い",
        body: ["館内ではスタッフの案内および掲示された注意事項に従ってください。"],
        bullets: [
          "危険物や持ち込み禁止物の持ち込みは禁止します。",
          "他のお客様の快適さ、安全、眺望体験を妨げる行為はご遠慮ください。",
          "通行を妨げる撮影機材や撮影行為は制限される場合があります。",
          "展望台、イベント会場、特別展示では追加ルールが適用されることがあります。",
        ],
      },
      {
        title: "5. サイト情報について",
        body: [
          "掲載情報の正確性には努めていますが、営業時間、イベント、フロア情報等は予告なく変更される場合があります。",
          "外部サイトへのリンク先については、各運営者の利用条件および方針が適用されます。",
        ],
      },
      {
        title: "6. 知的財産",
        body: [
          "本サイト上の文章、画像、ビジュアル素材、ブランド表示等の権利はTOKYO SKYTREEまたは各権利者に帰属します。個人の旅行計画目的を超える転載・商用利用には許諾が必要です。",
        ],
      },
      {
        title: "7. お問い合わせ",
        body: [
          "本規約に関するお問い合わせは、東京スカイツリー インフォメーションデスクまでご連絡ください。",
          "〒131-0045 東京都墨田区押上1-1-2",
          "電話: +81-3-5302-3470",
        ],
      },
    ],
    lastUpdated: "最終更新日: 2026年4月17日",
  },
  ko: {
    metadataTitle: "이용약관",
    metadataDescription:
      "웹사이트 이용, 온라인 예약, 방문 시 적용되는 기본 조건을 안내합니다.",
    title: "이용약관",
    subtitle: "사이트, 예약 과정, 현장 방문에 적용되는 조건을 확인해 주세요.",
    sections: [
      {
        title: "1. 동의",
        body: [
          "이 웹사이트와 예약 기능을 이용하면 본 약관에 동의한 것으로 간주됩니다. 동의하지 않는 경우 서비스 이용을 중단해 주세요.",
        ],
      },
      {
        title: "2. 예약 조건",
        body: [
          "예약은 잔여 가능 여부에 따라 달라지며, 화면에 예약 참조 번호가 표시되면 절차가 완료된 것으로 간주됩니다.",
          "요금은 일본 엔화로 표시되며 시즌, 날짜, 시간대, 상품에 따라 달라질 수 있습니다.",
        ],
        bullets: [
          "확정 전에 방문일, 티켓 종류, 인원을 확인해 주세요.",
          "방문 당일 필요할 수 있으므로 예약 번호를 보관해 주세요.",
          "특별 이벤트나 일부 층 이용에는 별도 조건이 적용될 수 있습니다.",
        ],
      },
      {
        title: "3. 변경 및 운영 중단",
        body: [
          "날씨, 유지보수, 혼잡, 안전관리 또는 이벤트 운영 사정으로 인해 운영시간과 입장 조건이 변경될 수 있습니다.",
          "운영 변경이 예약에 영향을 주는 경우 당시 운영 조건에 따라 별도 안내가 제공됩니다.",
        ],
      },
      {
        title: "4. 방문자 준수사항",
        body: ["시설 내에서는 직원 안내와 게시된 규정을 따라야 합니다."],
        bullets: [
          "위험물 또는 반입 금지 물품은 반입할 수 없습니다.",
          "다른 방문객의 안전과 관람 경험을 방해하는 행위는 금지됩니다.",
          "통행을 방해하는 촬영 장비나 활동은 제한될 수 있습니다.",
          "전망대, 이벤트 공간, 특별 전시에는 추가 규정이 적용될 수 있습니다.",
        ],
      },
      {
        title: "5. 웹사이트 정보",
        body: [
          "정보의 정확성을 유지하기 위해 노력하지만 일정, 행사, 층별 안내는 사전 고지 없이 변경될 수 있습니다.",
          "외부 링크는 편의를 위한 것이며 각 제3자 사이트의 정책과 약관이 적용됩니다.",
        ],
      },
      {
        title: "6. 지식재산",
        body: [
          "이 사이트의 텍스트, 이미지, 시각 자료, 브랜드 자산은 TOKYO SKYTREE 또는 권리자에게 귀속됩니다. 개인적인 여행 계획 목적을 넘는 재사용에는 허가가 필요합니다.",
        ],
      },
      {
        title: "7. 문의",
        body: [
          "약관 관련 문의는 TOKYO SKYTREE Information Desk로 연락해 주세요.",
          "1-1-2 Oshiage, Sumida-ku, Tokyo 131-0045, Japan",
          "전화: +81-3-5302-3470",
        ],
      },
    ],
    lastUpdated: "최종 업데이트: 2026년 4월 17일",
  },
  "zh-CN": {
    metadataTitle: "使用条款",
    metadataDescription: "说明网站使用、在线预约、现场参观时适用的基本条件。",
    title: "使用条款",
    subtitle: "适用于网站、预约流程与现场参观的条件说明。",
    sections: [
      {
        title: "1. 接受条款",
        body: [
          "使用本网站及预约流程，即表示您同意本条款。如不同意，请停止使用相关服务。",
        ],
      },
      {
        title: "2. 预约条件",
        body: [
          "预约需视名额情况而定，页面显示预约参考编号时即视为流程完成。",
          "票价以日元显示，可能因季节、日期、时段或方案而变化。",
        ],
        bullets: [
          "确认前请再次核对参观日期、票种与人数。",
          "请保留预约参考编号，以备入场时查验。",
          "特殊活动、主题企划或部分楼层可能适用附加条件。",
        ],
      },
      {
        title: "3. 变更与暂停",
        body: [
          "因天气、维护、拥挤、安全管理或活动运营等原因，营业时间、入场安排和设施内容可能变更。",
          "如运营调整影响预约，将根据当时的运营条件提供相应说明。",
        ],
      },
      {
        title: "4. 访客行为",
        body: ["参观期间请遵守工作人员指引及现场公告。"],
        bullets: [
          "禁止携带危险品或禁止入场物品。",
          "不得影响其他访客的安全、舒适或观景体验。",
          "可能会限制阻碍通行的摄影器材或拍摄行为。",
          "展望台、活动区域及特别展览可能适用额外规则。",
        ],
      },
      {
        title: "5. 网站信息",
        body: [
          "我们会尽力保持信息准确，但营业安排、活动与楼层信息仍可能在未事先通知的情况下调整。",
          "本站提供的外部链接仅供参考，其使用受第三方网站自身条款约束。",
        ],
      },
      {
        title: "6. 知识产权",
        body: [
          "本站文字、图片、视觉素材与品牌内容归 TOKYO SKYTREE 或相关权利人所有。允许个人行程规划用途，超出该范围的转载或商用需另行取得许可。",
        ],
      },
      {
        title: "7. 联系方式",
        body: [
          "如对本条款有疑问，请联系 TOKYO SKYTREE Information Desk。",
          "日本东京都墨田区押上 1-1-2，邮编 131-0045",
          "电话: +81-3-5302-3470",
        ],
      },
    ],
    lastUpdated: "最后更新：2026年4月17日",
  },
  "zh-TW": {
    metadataTitle: "使用條款",
    metadataDescription: "說明網站使用、線上預約與現場參觀時適用的基本條件。",
    title: "使用條款",
    subtitle: "適用於網站、預約流程與現場參觀的條件說明。",
    sections: [
      {
        title: "1. 條款同意",
        body: [
          "使用本網站與預約流程，即表示您同意本條款。若不同意，請停止使用相關服務。",
        ],
      },
      {
        title: "2. 預約條件",
        body: [
          "預約須視名額情況而定，當頁面顯示預約參考編號時，即視為流程完成。",
          "票價以日圓顯示，並可能依季節、日期、時段或方案調整。",
        ],
        bullets: [
          "確認前請再次檢查參觀日期、票種與人數。",
          "請保留預約參考編號，以備現場需要時出示。",
          "特別活動、主題企劃或部分樓層可能另有附加條件。",
        ],
      },
      {
        title: "3. 變更與暫停",
        body: [
          "因天候、維護、壅擠、安全管理或活動營運等因素，營業時間、入場安排與設施內容可能調整。",
          "如營運調整影響既有預約，將依當時營運條件提供對應說明。",
        ],
      },
      {
        title: "4. 訪客行為",
        body: ["參觀期間請遵循工作人員指引及現場公告。"],
        bullets: [
          "禁止攜帶危險物品或禁止入場物品。",
          "不得妨礙其他訪客的安全、舒適或觀景體驗。",
          "可能限制妨礙通行的拍攝器材或拍攝行為。",
          "展望台、活動場地與特別展覽可能另有規定。",
        ],
      },
      {
        title: "5. 網站資訊",
        body: [
          "我們將盡力維持資訊正確，但營業安排、活動與樓層資訊仍可能在未事先通知下變更。",
          "本站提供之外部連結僅供參考，其使用仍受第三方網站各自條款約束。",
        ],
      },
      {
        title: "6. 智慧財產",
        body: [
          "本站文字、圖片、視覺素材與品牌內容屬 TOKYO SKYTREE 或相關權利人所有。允許個人旅遊規劃用途，超出此範圍的轉載或商業使用需事先取得許可。",
        ],
      },
      {
        title: "7. 聯絡方式",
        body: [
          "如對本條款有疑問，請聯絡 TOKYO SKYTREE Information Desk。",
          "日本東京都墨田區押上 1-1-2，131-0045",
          "電話: +81-3-5302-3470",
        ],
      },
    ],
    lastUpdated: "最後更新：2026年4月17日",
  },
  th: {
    metadataTitle: "ข้อกำหนดการใช้งาน",
    metadataDescription:
      "อธิบายเงื่อนไขพื้นฐานสำหรับการใช้งานเว็บไซต์ การจองออนไลน์ และการเข้าชมหน้างาน",
    title: "ข้อกำหนดการใช้งาน",
    subtitle: "เงื่อนไขที่ใช้กับเว็บไซต์ การจอง และการเข้าชมในสถานที่",
    sections: [
      {
        title: "1. การยอมรับเงื่อนไข",
        body: [
          "เมื่อคุณใช้งานเว็บไซต์และขั้นตอนการจองนี้ ถือว่าคุณยอมรับข้อกำหนดดังกล่าว หากไม่ยอมรับ โปรดหยุดใช้บริการ",
        ],
      },
      {
        title: "2. เงื่อนไขการจอง",
        body: [
          "การจองขึ้นอยู่กับจำนวนที่ว่าง และจะถือว่าเสร็จสมบูรณ์เมื่อมีหมายเลขอ้างอิงการจองแสดงบนหน้าจอ",
          "ราคาบัตรจะแสดงเป็นเงินเยนญี่ปุ่น และอาจเปลี่ยนแปลงตามฤดูกาล วันที่ ช่วงเวลา หรือแพ็กเกจ",
        ],
        bullets: [
          "โปรดตรวจสอบวันที่เข้าชม ประเภทบัตร และจำนวนผู้เข้าชมก่อนยืนยัน",
          "ควรเก็บหมายเลขอ้างอิงการจองไว้เพื่อใช้แสดงหากมีการร้องขอในวันเข้าชม",
          "กิจกรรมพิเศษ แคมเปญ หรือบางชั้นอาจมีเงื่อนไขเพิ่มเติมเฉพาะหน้า",
        ],
      },
      {
        title: "3. การเปลี่ยนแปลงและการระงับ",
        body: [
          "เวลาเปิดทำการ ช่วงเวลาเข้าชม และการใช้งานบางพื้นที่อาจเปลี่ยนแปลงได้จากสภาพอากาศ การบำรุงรักษา ความหนาแน่น ความปลอดภัย หรือการจัดกิจกรรม",
          "หากมีการเปลี่ยนแปลงที่กระทบต่อการจอง จะมีการแจ้งแนวทางตามเงื่อนไขการดำเนินงานในขณะนั้น",
        ],
      },
      {
        title: "4. การปฏิบัติตัวของผู้เข้าชม",
        body: ["ผู้เข้าชมต้องปฏิบัติตามคำแนะนำของเจ้าหน้าที่และป้ายประกาศภายในสถานที่"],
        bullets: [
          "ห้ามนำสิ่งของอันตรายหรือสิ่งของต้องห้ามเข้าภายในสถานที่",
          "ห้ามกระทำการที่รบกวนความปลอดภัย ความสะดวกสบาย หรือประสบการณ์ของผู้เข้าชมคนอื่น",
          "อุปกรณ์ถ่ายภาพหรือกิจกรรมที่กีดขวางทางเดินอาจถูกจำกัด",
          "จุดชมวิว พื้นที่จัดงาน และนิทรรศการพิเศษอาจมีกฎเพิ่มเติม",
        ],
      },
      {
        title: "5. ข้อมูลบนเว็บไซต์",
        body: [
          "เราพยายามดูแลให้ข้อมูลถูกต้องล่าสุด แต่เวลาเปิดทำการ กิจกรรม และข้อมูลแต่ละชั้นอาจเปลี่ยนแปลงได้โดยไม่แจ้งล่วงหน้า",
          "ลิงก์ภายนอกมีไว้เพื่อความสะดวก และยังอยู่ภายใต้ข้อกำหนดของเว็บไซต์บุคคลที่สามนั้น ๆ",
        ],
      },
      {
        title: "6. ทรัพย์สินทางปัญญา",
        body: [
          "ข้อความ รูปภาพ สื่อภาพ และแบรนด์ที่แสดงบนเว็บไซต์นี้เป็นทรัพย์สินของ TOKYO SKYTREE หรือเจ้าของสิทธิ์ที่เกี่ยวข้อง อนุญาตให้ใช้เพื่อการวางแผนการเดินทางส่วนบุคคลเท่านั้น การนำไปใช้ต่อหรือเชิงพาณิชย์ต้องได้รับอนุญาตก่อน",
        ],
      },
      {
        title: "7. ติดต่อ",
        body: [
          "หากมีคำถามเกี่ยวกับข้อกำหนดการใช้งาน โปรดติดต่อ TOKYO SKYTREE Information Desk",
          "1-1-2 Oshiage, Sumida-ku, Tokyo 131-0045, Japan",
          "โทรศัพท์: +81-3-5302-3470",
        ],
      },
    ],
    lastUpdated: "อัปเดตล่าสุด: 17 เมษายน 2026",
  },
};
