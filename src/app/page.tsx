import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  return (
    <div className="space-y-16 pb-12 text-center">
      {/* 히어로 섹션 */}
      <section className="mt-10">
        <h1 className="text-[30px] font-medium text-foreground leading-snug mb-10">
          인생 후반전,<br />
          나를 위해 살 준비 되셨나요?
        </h1>
        <div className="mt-6 rounded-2xl overflow-hidden">
          <Image
            src={`${basePath}/img01.jpg`}
            alt="할두 소개"
            width={800}
            height={500}
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>
        <div className="mt-10 text-foreground leading-relaxed">
          <p>
            누구보다 치열하게 살아온 5060 세대,<br />
            그런데 취미 활동은 가장 단조롭고(TV 시청, 50%),<br />
            전 세대 중 제일 외롭다(19%)고 조사되었습니다.
          </p>
          <p className="mt-4 text-foreground italic">
            &lsquo;재밌는 건 다 젊은 애들 거던데..&rsquo;<br />
            &lsquo;내가 괜히 갔다가 민폐 될까봐..&rsquo;
          </p>
          <p className="mt-4">그래서 할두가 탄생했습니다.</p>
        </div>
        <p className="mt-6 text-foreground">
          5060 이모들이 주인공이 되는 곳,<br />
          이제 TV를 끄고, 나를 설레게 하는 일상을 사세요.
        </p>
        <p className="mt-4 text-[24px] font-medium text-foreground">
          <span className="text-point">할</span>머니가 되어서도<br />
          <span className="text-point">두</span>근두근!
        </p>
      </section>

      <hr className="border-t border-border" />

      {/* 할두 클럽 */}
      <section>
        <p className="text-[30px] font-medium text-foreground mb-1 mt-10">내 세계를 확장하는 모임</p>
        <h2 className="text-[30px] font-medium text-foreground mb-10">할두 클럽</h2>
        <div className="mt-6 space-y-3">
          <Image
            src={`${basePath}/img02.jpg`}
            alt="할두 클럽 활동"
            width={800}
            height={500}
            className="w-full h-auto object-cover rounded-2xl"
          />
          <Image
            src={`${basePath}/img03.jpg`}
            alt="할두 클럽 모임"
            width={800}
            height={300}
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>
        <div className="mt-10 text-foreground leading-relaxed">
          <p className="italic">
            글쓰기 클럽, 재테크 클럽, 패들 보드 클럽, 글램핑 클럽, 북클럽
          </p>
          <p className="mt-4">
            이번 달엔 어떤 도전을 하고 싶나요?<br />
            이모는 몸만 오세요. 나머진 조카들이 다 준비해둘게요.
          </p>
          <p className="mt-4">
            결 맞는 여성들끼리 안전하고, 즐거운 시간.<br />
            이모의 인생은 할두 클럽 참여 전과 후로 나뉠 거예요.
          </p>
        </div>
      </section>

      <hr className="border-t border-border" />

      {/* 할두 마켓 */}
      <section>
        <p className="text-[30px] font-medium text-foreground mb-1 mt-10">나를 대접하는 시간</p>
        <h2 className="text-[30px] font-medium text-foreground mb-10">할두 마켓</h2>
        <div className="mt-6 text-foreground leading-relaxed">
          <p>
            공장에서 찍어낸 물건보다<br />
            이모의 인생처럼 정성과 시간의 깊이가 담긴<br />
            좋은 상품을 찾아 소개해요.
          </p>
          <p className="mt-4">
            이제 이모네 부엌엔 제대로 된 것만 들이세요.<br />
            조카들이 깐깐하게 검증하고, 쉽게 알려드릴게요.
          </p>
          <p className="mt-4">
            좋은 식재료와 정갈한 도구가 주는 힘.<br />
            몸 뿐만 아니라 마음까지 건강해지는 변화를 느껴보세요.
          </p>
        </div>
      </section>

      {/* 실적 - 개별 박스 */}
      <section>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-point-light rounded-2xl py-6 px-3">
            <p className="text-[24px] font-medium text-foreground">80개+</p>
            <p className="text-[14px] text-foreground mt-1">누적 클럽</p>
          </div>
          <div className="bg-point-light rounded-2xl py-6 px-3">
            <p className="text-[24px] font-medium text-foreground">2,000건+</p>
            <p className="text-[14px] text-foreground mt-1">참여 수</p>
          </div>
          <div className="bg-point-light rounded-2xl py-6 px-3">
            <p className="text-[24px] font-medium text-foreground">26곳+</p>
            <p className="text-[14px] text-foreground mt-1">파트너사</p>
          </div>
        </div>
      </section>

      <hr className="border-t border-border" />

      {/* 할두 조카들 */}
      <section>
        <p className="text-[30px] font-medium text-foreground mb-1 mt-10">고군분투하는</p>
        <h2 className="text-[30px] font-medium text-foreground mb-10">할두 조카들</h2>
        <div className="mt-6 rounded-2xl overflow-hidden">
          <Image
            src={`${basePath}/img04.jpg`}
            alt="할두 조카들"
            width={800}
            height={500}
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>
        <div className="mt-10 text-foreground leading-relaxed">
          <p>
            할두 조카는 할두 운영진의 애칭이에요.<br />
            조카들은 프롭테크, 핀테크 등의 스타트업 경험을 바탕으로<br />
            매일 눈물 나는 성공과 실패를 반복하며,<br />
            하지만 어느 때보다 큰 성취감을 느끼며 할두를 키우고 있어요.
          </p>
          <p className="mt-4">
            감사하게도 벌써 1만 5천 명의 이모들이 함께 해주시고 계신데,<br />
            길 가다 마주치는 5060 여성 10명 중 1명은<br />
            우리 할두 멤버면 좋겠다는 바람이에요.
          </p>
          <p className="mt-4">혹시.. 소문 많이 내주실래요?</p>
          <p className="mt-4 text-[20px] font-medium text-foreground">오늘도 할두 있다!</p>
        </div>
      </section>

      <hr className="border-t border-border" />

      {/* 더 알아보기 */}
      <section>
        <h3 className="text-[24px] font-medium text-point mb-4">할두가 더 궁금하신가요?</h3>
        <div className="space-y-3">
          <a
            href="https://www.instagram.com/haldo_daily"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white rounded-xl border border-border hover:border-point transition-colors min-h-[56px] text-left"
          >
            <span className="text-xl">📷</span>
            <span className="text-foreground">할두 인스타그램 가기</span>
            <span className="ml-auto text-icon">›</span>
          </a>
          <a
            href="https://smartstore.naver.com/haldo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white rounded-xl border border-border hover:border-point transition-colors min-h-[56px] text-left"
          >
            <span className="text-xl">🛒</span>
            <span className="text-foreground">할두 네이버 스토어 가기</span>
            <span className="ml-auto text-icon">›</span>
          </a>
          <a
            href="https://forms.gle/spWCz4FmXUkxk3UTA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white rounded-xl border border-border hover:border-point transition-colors min-h-[56px] text-left"
          >
            <span className="text-xl">✉️</span>
            <span className="text-foreground">문의 및 의견 보내기</span>
            <span className="ml-auto text-icon">›</span>
          </a>
        </div>
        <p className="mt-8 text-[12px] text-foreground">&copy; 2026. Haldo. All rights reserved.</p>
      </section>
    </div>
  );
}
