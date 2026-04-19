import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보 처리방침 - 할두",
};

export default function PrivacyPage() {
  return (
    <div className="pb-16 text-foreground leading-relaxed">
      {/* 타이틀 */}
      <h1 className="text-[26px] font-bold mt-6 mb-2">
        할두(Haldoo) 개인정보 처리방침
      </h1>
      <p className="text-text-sub text-[14px] mb-8">
        시행일: 2026년 5월 1일
      </p>

      <p className="mb-10">
        할두(할두 타운/할두 빌리지)는 5060 고객님들의 건강하고 풍요로운 삶을
        지원하기 위해 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를
        적법하게 처리하고 안전하게 관리하고 있습니다. 특히,{" "}
        <strong>
          할두는 만 14세 미만 아동의 가입을 엄격히 제한하며, 아동의 개인정보를
          수집하지 않습니다
        </strong>
        . 고객님이 자신의 개인정보가 어떻게 처리되는지 쉽게 이해할 수 있도록
        다음과 같이 개인정보 처리방침을 수립하여 공개합니다.
      </p>

      {/* 라벨링 */}
      <section className="bg-point-light rounded-2xl p-5 mb-10">
        <h2 className="text-[18px] font-bold mb-4">
          주요 개인정보 처리 표시 (라벨링)
        </h2>
        <p className="text-[15px] text-text-sub mb-3">
          고객님의 소중한 개인정보는 아래와 같은 주요 목적으로 안전하게
          처리됩니다.
        </p>
        <ul className="space-y-2 text-[15px]">
          <li>
            <strong>[ 필수 정보 수집 ]</strong> 이름, 생년월일, 연락처 등 (회원
            심사 및 가입용)
          </li>
          <li>
            <strong>[ 제3자 제공 ]</strong> 외부 제휴 상품 판매업체 (스토어 상품
            배송용)
          </li>
          <li>
            <strong>[ 자동화된 결정 ]</strong> 연령/성별/추천인 코드 기반 가입
            심사 자동화
          </li>
          <li>
            <strong>[ 개인정보 파기 ]</strong> 회원 탈퇴 시 지체 없이 영구 파기
          </li>
          <li>
            <strong>[ 업무 위탁 ]</strong> 본인인증(SMS), 택배 배송사 등
          </li>
          <li>
            <strong>[ 맞춤형 광고 ]</strong> 앱 이용 이력 활용 (스마트폰 설정에서
            차단 가능)
          </li>
        </ul>
      </section>

      <Divider />

      {/* 1. 개인정보의 처리 목적 */}
      <Section number={1} title="개인정보의 처리 목적, 처리 항목, 보유 및 이용 기간">
        <p className="mb-4">
          할두는 서비스 제공을 위해 필요 최소한의 범위에서 개인정보를
          수집&middot;이용하며, 목적 이외의 용도로는 이용되지 않습니다.
        </p>

        <h4 className="font-bold text-[16px] mb-3">
          정보주체의 동의를 받지 않고 처리하는 개인정보 (필수)
        </h4>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-[14px] border-collapse">
            <thead>
              <tr className="bg-point-light">
                <th className="border border-border p-2 text-left">법적 근거</th>
                <th className="border border-border p-2 text-left">처리 목적</th>
                <th className="border border-border p-2 text-left">처리 항목</th>
                <th className="border border-border p-2 text-left">보유 기간</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-2">
                  「개인정보 보호법」 제15조제1항제4호 (계약 체결&middot;이행)
                </td>
                <td className="border border-border p-2">
                  <strong>Lv.1 필수 정보 작성 및 가입 심사</strong>, 게시판 제한
                  열람 권한 부여
                </td>
                <td className="border border-border p-2">
                  이름(실명), 연락처(휴대전화 번호), 닉네임, 생년월일(입력),
                  성별(SMS 인증 시 자동판별), 추천인 코드
                </td>
                <td className="border border-border p-2">회원 탈퇴 시까지</td>
              </tr>
              <tr>
                <td className="border border-border p-2">
                  「개인정보 보호법」 제15조제1항제4호 (계약 체결&middot;이행)
                </td>
                <td className="border border-border p-2">
                  스토어 내 자사/제휴 상품 배송 및 혜택(실물/현금성 크레딧) 증정
                </td>
                <td className="border border-border p-2">
                  성명, 휴대전화 번호, 주소 (스토어 상품 결제 또는 실물 혜택 신청
                  시점에 한하여 별도 수집)
                </td>
                <td className="border border-border p-2">
                  물품 배송 및 재화 공급 완료 시까지
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="font-bold text-[16px] mb-3">
          정보주체의 동의를 받아 처리하는 개인정보 (선택)
        </h4>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-[14px] border-collapse">
            <thead>
              <tr className="bg-point-light">
                <th className="border border-border p-2 text-left">법적 근거</th>
                <th className="border border-border p-2 text-left">처리 목적</th>
                <th className="border border-border p-2 text-left">처리 항목</th>
                <th className="border border-border p-2 text-left">보유 기간</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-2">
                  「개인정보 보호법」 제15조제1항제1호 (동의)
                </td>
                <td className="border border-border p-2">
                  <strong>Lv.2 정회원 승인 심사</strong> 및 커뮤니티 프로필 노출,
                  게시판 전체 열람/글쓰기 권한 부여
                </td>
                <td className="border border-border p-2">
                  10문 10답 (취미, 장점, 애창곡, 좌우명, 인생 여행지, 좋아하는
                  운동, 음식, 건강팁, 5년 후, 주 활동지역)
                </td>
                <td className="border border-border p-2">회원 탈퇴 시까지</td>
              </tr>
              <tr>
                <td className="border border-border p-2">
                  「개인정보 보호법」 제15조제1항제1호 (동의)
                </td>
                <td className="border border-border p-2">
                  클로버 활동 등급 산정 및 마이페이지 맞춤 통계 제공
                </td>
                <td className="border border-border p-2">
                  서비스 이용 기록, 인증 횟수, 주요 사용 태그(예: #건강 등)
                </td>
                <td className="border border-border p-2">회원 탈퇴 시까지</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="font-bold text-[16px] mb-3">
          정보주체 이외로부터 개인정보를 제공받는 경우
        </h4>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-[14px] border-collapse">
            <thead>
              <tr className="bg-point-light">
                <th className="border border-border p-2 text-left">법적 근거</th>
                <th className="border border-border p-2 text-left">
                  제공 출처 및 목적
                </th>
                <th className="border border-border p-2 text-left">수집 항목</th>
                <th className="border border-border p-2 text-left">보유 기간</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-2">
                  「개인정보 보호법」 제15조제1항제4호 (계약 체결&middot;이행)
                </td>
                <td className="border border-border p-2">
                  (주)카카오: &lsquo;카톡으로 시작하기&rsquo; 간편 로그인 (Lv.0 앱
                  둘러보기용)
                </td>
                <td className="border border-border p-2">
                  프로필 정보(닉네임 등), 연계정보(CI)
                </td>
                <td className="border border-border p-2">회원 탈퇴 시까지</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-[14px] text-text-sub">
          단, 「전자상거래 등에서의 소비자보호에 관한 법률」에 따라 대금결제 및
          재화 등의 공급기록은 5년, 소비자 불만/분쟁 처리 기록은 3년간 예외적으로
          보존합니다.
        </p>
      </Section>

      <Divider />

      {/* 2. 제3자 제공 */}
      <Section number={2} title="개인정보의 제3자 제공">
        <p className="mb-4">
          할두는 앱 내 스토어 제휴 상품 제공을 위해, 정보주체의 동의를 얻어 필요
          최소한의 범위 내에서만 개인정보를 제3자에게 제공합니다.
        </p>
        <ul className="space-y-2">
          <li>
            <strong>제공받는 자:</strong> 외부 제휴 상품 판매업체 (스토어 상품 구매
            시 개별 안내)
          </li>
          <li>
            <strong>제공 목적:</strong> 구매 상품의 배송 및 고객 상담(CS)
          </li>
          <li>
            <strong>제공 항목:</strong> 이름, 휴대전화 번호, 배송지 주소
          </li>
          <li>
            <strong>보유 및 이용기간:</strong> 재화 공급 완료 및 분쟁 처리 완료 후
            1년
          </li>
        </ul>
      </Section>

      <Divider />

      {/* 3. 업무 위탁 */}
      <Section number={3} title="개인정보 처리업무의 위탁">
        <p className="mb-3">
          할두는 원활하고 안전한 서비스 운영을 위해 다음과 같이 업무를 위탁하고
          있습니다.
        </p>
        <ul>
          <li>
            <strong>카카오 본인인증:</strong> 카카오 본인인증 업무 및 성별 판별
          </li>
        </ul>
      </Section>

      <Divider />

      {/* 4. 자동화된 결정 */}
      <Section number={4} title="자동화된 결정에 관한 사항">
        <p className="mb-4">
          할두는 타깃 고객층(5060 여성)에 맞는 원활한 커뮤니티 운영을 위해,
          시스템을 통한 <strong>&lsquo;자동화된 가입 심사&rsquo;</strong>를
          적용하고 있습니다.
        </p>
        <ul className="space-y-3">
          <li>
            <strong>자동화된 결정 목적 및 대상:</strong> Lv.1 심사 대기 회원의
            가입 자격 판별
          </li>
          <li>
            <strong>사용되는 개인정보 항목:</strong> 생년월일(나이), 성별, 추천인
            코드
          </li>
          <li>
            <strong>자동화된 결정 절차 및 기준:</strong> 시스템이 정보주체가 입력한
            추천인 코드의 유효성(닉네임+번호 뒷 4자리 매칭)을 검증하고, 카카오
            본인 인증을 통해 수집된 성별이 &lsquo;여성&rsquo;인지, 생년월일 기준
            연령이 &lsquo;만 45세 이상 ~ 75세 이하(1952년~1982년생)&rsquo;인지
            자동으로 판별합니다.
          </li>
          <li>
            <strong>결과:</strong> 위 조건 중 하나라도 충족하지 못할 경우 시스템에
            의해 즉시 가입이 제한되며,{" "}
            <strong>
              &ldquo;아쉽지만 가입 조건이 맞지 않아요&rdquo;
            </strong>{" "}
            라는 안내가 노출됩니다.
          </li>
          <li>
            <strong>권리 행사 및 거부 방법:</strong> 정보주체는 이러한 자동화된
            결정에 대하여 고객센터를 통해 설명을 요구하거나 의견 제출을 통해
            이의를 제기(검토 요구)할 수 있습니다.
          </li>
        </ul>
      </Section>

      <Divider />

      {/* 5. 행태정보 */}
      <Section number={5} title="제3자가 수집해가는 행태정보에 관한 사항">
        <p className="mb-4">
          할두는 고객님께 최적화된 서비스 혜택과 온라인 맞춤형 광고를 제공하기
          위해, 외부 사업자가 앱 이용 이력(행태정보)을 수집하도록 허용하고
          있습니다.
        </p>
        <ul className="space-y-2 mb-4">
          <li>
            <strong>수집 장치 명칭:</strong> Google Analytics (GA4), Firebase
            Analytics, 픽셀(Pixel)/SDK
          </li>
          <li>
            <strong>수집해가는 사업자:</strong> 구글(Google), 메타(Meta) 등
          </li>
          <li>
            <strong>수집 항목:</strong> 할두 앱 접속 및 이용 이력, 광고
            식별자(ADID/IDFA)
          </li>
          <li>
            <strong>수집 목적:</strong> 앱 통계 분석 및 타겟팅 맞춤 광고 제공
          </li>
        </ul>
        <div className="bg-point-light rounded-xl p-4 text-[15px]">
          <p className="font-bold mb-2">거부(차단) 방법</p>
          <ul className="space-y-1">
            <li>
              <strong>안드로이드:</strong> 설정 &rarr; 보안 및 개인정보 보호 &rarr;
              개인정보 보호 &rarr; 기타 개인정보 설정 &rarr; 광고 &rarr; 광고ID
              재설정 또는 삭제
            </li>
            <li>
              <strong>아이폰(iOS):</strong> 설정 &rarr; 개인정보 보호 및 보안
              &rarr; 추적 &rarr; 앱 추적 허용 해제
            </li>
          </ul>
        </div>
      </Section>

      <Divider />

      {/* 6. 쿠키 */}
      <Section number={6} title="개인정보 자동 수집 장치의 설치·운영 및 거부">
        <p className="mb-3">
          할두는 웹사이트 이용 시 사용자 편의를 위해
          &lsquo;쿠키(Cookie)&rsquo;를 운영합니다.
        </p>
        <div className="bg-point-light rounded-xl p-4 text-[15px]">
          <p className="font-bold mb-2">쿠키 차단 방법</p>
          <ul className="space-y-1">
            <li>
              <strong>크롬:</strong> 우측 상단 &lsquo;&#8942;&rsquo; &rarr; 설정
              &rarr; 개인정보 보호 및 보안 &rarr; 서드 파티 쿠키 차단
            </li>
            <li>
              <strong>삼성 인터넷:</strong> 우측 하단 탭 &rarr; &lsquo;비밀 모드
              켜기&rsquo; 실행
            </li>
          </ul>
        </div>
      </Section>

      <Divider />

      {/* 7. 파기 */}
      <Section number={7} title="개인정보의 파기 절차 및 방법">
        <p className="mb-3">
          할두는 개인정보 보유 기간이 지나거나 처리 목적이 달성되면 지체 없이
          안전하게 파기합니다.
        </p>
        <ul className="space-y-2">
          <li>
            <strong>파기 절차:</strong> 회원 탈퇴 등 파기 사유가 발생한 정보를
            선정하여 지체 없이 파기합니다.
          </li>
          <li>
            <strong>파기 방법:</strong> 전자적 파일은 복구할 수 없도록 영구
            삭제하며, 종이 문서는 분쇄기로 파쇄하거나 소각합니다.
          </li>
        </ul>
      </Section>

      <Divider />

      {/* 8. 권리·의무 */}
      <Section number={8} title="정보주체와 법정대리인의 권리·의무 및 행사 방법">
        <p>
          고객님은 언제든지 앱 내 &lsquo;마이페이지(MY)&rsquo; 메뉴를 통해
          본인의 개인정보를 조회하거나 수정할 수 있으며, 회원 탈퇴를 진행하실 수
          있습니다. 권리 행사는 고객센터(전화, 이메일)를 통해서도 가능하며, 할두는
          지체 없이 조치하겠습니다.
        </p>
      </Section>

      <Divider />

      {/* 9. 안전성 확보 */}
      <Section number={9} title="개인정보의 안전성 확보 조치">
        <p>
          할두는 고객님의 개인정보를 안전하게 보호하기 위해 해킹 대비 보안
          프로그램 설치, 주기적인 점검, 전산실 접근 통제 등
          기술적&middot;관리적 안전 조치를 다하고 있습니다.
        </p>
      </Section>

      <Divider />

      {/* 10. 구제방법 */}
      <Section number={10} title="권익침해 구제방법 및 고충 처리 부서">
        <p className="mb-4">
          개인정보 관련 불만 처리 및 피해 구제가 필요하신 경우 아래 부서 또는
          국가 기관으로 연락해 주시기 바랍니다.
        </p>

        <div className="bg-point-light rounded-xl p-4 mb-4">
          <p className="font-bold mb-2">할두 개인정보 고충 처리 부서</p>
          <ul className="text-[15px] space-y-1">
            <li>부서 및 책임자: 박슬기 (대표)</li>
            <li>연락처: 010-9569-9180 / privacy@haldo.kr</li>
          </ul>
        </div>

        <div className="bg-point-light rounded-xl p-4">
          <p className="font-bold mb-2">국가 권익침해 구제 기관</p>
          <ul className="text-[15px] space-y-1">
            <li>개인정보 분쟁조정위원회: 1833-6972</li>
            <li>개인정보침해 신고센터: 118</li>
            <li>경찰청 사이버수사국: 182</li>
          </ul>
        </div>
      </Section>

      <Divider />

      {/* 11. 변경 */}
      <Section number={11} title="개인정보 처리방침의 변경">
        <p>
          이 개인정보 처리방침은 <strong>2026년 5월 1일</strong>부터 적용됩니다.
          내용이 변경될 경우 시행 7일 전 앱 내 공지사항을 통해 쉽게 확인할 수
          있도록 미리 알려드리겠습니다.
        </p>
      </Section>

      <Divider />

      {/* FAQ */}
      <section className="mt-10">
        <h2 className="text-[22px] font-bold mb-6">
          5060 고객을 위한 알기 쉬운 개인정보 Q&amp;A
        </h2>

        <div className="space-y-6">
          <FaqItem
            question="할두는 제 어떤 정보를 가져가나요?"
            answer="할두는 고객님들만의 안전하고 특별한 공간을 만들기 위해 가입 심사에 꼭 필요한 이름, 핸드폰 번호, 생년월일, 성별, 추천인 코드를 확인하고 있어요. 나중에 정회원이 되셔서 프로필을 꾸미시거나 혜택을 받으실 때, 취미나 주 활동지역 같은 '10문 10답' 정보와 택배 받을 '주소'를 추가로 여쭤볼 수 있답니다."
          />
          <FaqItem
            question="내 정보는 어디에 쓰이나요?"
            answer="할두는 45세부터 75세 여성분들만 가입할 수 있는 검증된 커뮤니티라서, 가입 조건에 맞으시는지 확인하는 데 가장 먼저 쓰여요. 그리고 고객님이 남겨주신 소중한 글과 인증을 바탕으로 크레딧이나 상품 혜택을 챙겨드리기 위해 사용된답니다."
          />
          <FaqItem
            question="내 정보를 다른 곳에 넘겨주기도 하나요?"
            answer="아니요, 고객님의 정보는 할두가 꽁꽁 안전하게 지키고 있어요! 다만, 딱 한 가지 예외가 있습니다. 할두 스토어에서 예쁜 제휴 상품(3~5개 이내 큐레이션)을 구매하시거나 등급 혜택으로 실물 선물을 받으실 때, 물건을 배달해주실 택배 기사님과 판매 업체에게만 주소와 연락처를 꼭 필요한 만큼만 알려드려요."
          />
          <FaqItem
            question="내 정보는 언제까지 가지고 있나요?"
            answer="고객님이 할두와 함께하시는 동안만 소중히 간직합니다. 만약 회원 탈퇴를 하시면, 고객님의 정보는 지체 없이 깨끗하게 영구 삭제되니 안심하셔도 좋아요. (단, 법에서 보관하라고 정해둔 결제 및 환불 기록은 예외적으로 3~5년 보관해요.)"
          />
          <FaqItem
            question="내 정보를 고치거나 앱을 탈퇴하고 싶으면 어떻게 하나요?"
            answer="앱 안에 있는 '마이페이지(MY)' 메뉴에 들어가시면 언제든지 직접 내 정보를 고치거나 회원 탈퇴를 하실 수 있어요. 스마트폰이 익숙하지 않아 어려우시다면, 저희 고객센터(☎ 02-000-0000)로 편하게 전화해 주세요. 언제든 친절하게 도와드릴게요!"
          />
        </div>
      </section>

      {/* 홈으로 돌아가기 */}
      <div className="mt-12 text-center">
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-point text-white font-medium rounded-xl hover:bg-point-dark transition-colors min-h-[48px]"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}

function Section({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-2">
      <h3 className="text-[20px] font-bold mb-4">
        {number}. {title}
      </h3>
      {children}
    </section>
  );
}

function Divider() {
  return <hr className="border-t border-border my-8" />;
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white border border-border rounded-xl p-5">
      <p className="font-bold text-point mb-2">Q. {question}</p>
      <p className="text-[16px] leading-relaxed">{answer}</p>
    </div>
  );
}
