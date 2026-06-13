import svgPaths from "./svg-l470gbmhed";
import imgImageNests from "./c18fd761ebe39364e9243b8444a920d5d726e949.png";
import videoNestSolution from "../NEST_SOLUTION.mp4";
import profilePhoto from "../________4_.png";

function Container3() {
  return (
    <div className="h-[78px] relative shrink-0 w-[95.271px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid not-italic relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[32px] left-0 text-white text-[24px] top-0 w-[95.271px]">김상연</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 text-white/90 text-[14px] top-[35.67px] whitespace-nowrap">17년 임상 경력</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 text-white/90 text-[14px] top-[57.67px] whitespace-nowrap">네스트솔루션</p>
      </div>
    </div>
  );
}

function ImageNests() {
  return (
    <div className="h-[120px] relative shrink-0 w-[121px]" data-name="Image (Nests)">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[72.13%] left-0 max-w-none top-[13.93%] w-full" src={imgImageNests} />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[78px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <ImageNests />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] h-[37px] left-[-0.5px] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[8px] w-[77px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[16px] left-[38px] not-italic text-[#314158] text-[12px] text-center top-[11px] whitespace-nowrap">CS 관리</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] h-[37px] left-[85.5px] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[8px] w-[76px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[16px] left-[38px] not-italic text-[#314158] text-[12px] text-center top-[11px] whitespace-nowrap">마케팅</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] h-[37px] left-[170.5px] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[8px] w-[76px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[16px] left-[38px] not-italic text-[#314158] text-[12px] text-center top-[11px] whitespace-nowrap">경영 개선</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] h-[37px] left-[255.5px] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[8px] w-[82px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium h-[20px] leading-[16px] left-[40.5px] not-italic text-[#314158] text-[12px] text-center top-[9px] w-[71px]">인력 관리</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[68px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[400px] relative rounded-bl-[24px] rounded-br-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 w-full overflow-hidden" style={{ backgroundImage: "linear-gradient(150.983deg, rgb(241, 245, 249) 0%, rgb(239, 246, 255) 50%, rgb(241, 245, 249) 100%)" }} data-name="Container">
      {/* Profile Photo Background */}
      <div className="absolute inset-0 flex items-end justify-center">
        <img
          src={profilePhoto}
          alt="Profile"
          className="h-full w-auto object-cover object-top"
          style={{
            objectPosition: 'center 10%',
            maxWidth: 'none'
          }}
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent pt-20 pb-8">
        <div className="content-stretch flex flex-col gap-[24px] items-start px-[24px] relative">
          <Container2 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[56px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#45556c] text-[14px] top-[-0.33px] whitespace-nowrap">휴대전화</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d293d] text-[14px] top-[-0.33px] whitespace-nowrap">010-3129-8248</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p43eff00} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[120.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text1 />
        <Icon />
      </div>
    </div>
  );
}

function Link() {
  return (
    <a href="tel:010-3129-8248" className="content-stretch flex h-[52.667px] items-center justify-between pb-[16.667px] pt-[16px] relative shrink-0 w-full hover:bg-slate-50 transition-colors cursor-pointer" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <Text />
      <Container6 />
    </a>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[42px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#45556c] text-[14px] top-[-0.33px] whitespace-nowrap">이메일</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[151.646px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d293d] text-[14px] top-[-0.33px] whitespace-nowrap">nestsadvice@gmail.com</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p43eff00} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[175.646px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text3 />
        <Icon1 />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <a href="mailto:nestsadvice@gmail.com" className="content-stretch flex h-[52.667px] items-center justify-between pb-[16.667px] pt-[16px] relative shrink-0 w-full hover:bg-slate-50 transition-colors cursor-pointer" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <Text2 />
      <Container7 />
    </a>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[56px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#45556c] text-[14px] top-[-0.33px] whitespace-nowrap">홈페이지</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[110.385px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d293d] text-[14px] top-[-0.33px] whitespace-nowrap">nestsolution.co.kr</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p43eff00} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[134.385px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text5 />
        <Icon2 />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <a href="https://nestsolution.co.kr/" target="_blank" rel="noopener noreferrer" className="content-stretch flex h-[52.667px] items-center justify-between pb-[16.667px] pt-[16px] relative shrink-0 w-full hover:bg-slate-50 transition-colors cursor-pointer" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <Text4 />
      <Container8 />
    </a>
  );
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#45556c] text-[14px] top-[-0.33px] whitespace-nowrap">주소</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[238.823px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-full absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-[239px] not-italic text-[#1d293d] text-[14px] text-right top-[-0.33px] whitespace-nowrap">서울특별시 서초구 서운로 13 지하1층</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p43eff00} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[262.823px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text7 />
        <Icon3 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <a href="https://map.naver.com/p/search/%EB%84%A4%EC%8A%A4%ED%8A%B8%EC%86%94%EB%A3%A8%EC%85%98/place/2033624447?placePath=%3Fbk_query%3D%25EB%2584%25A4%25EC%258A%25A4%25ED%258A%25B8%25EC%2586%2594%25EB%25A3%25A8%25EC%2585%2598%26entry%3Dpll%26from%3Dnx%26fromNxList%3Dtrue&placeSearchOption=bk_query%3D%25EB%2584%25A4%25EC%258A%25A4%25ED%258A%25B8%25EC%2586%2594%25EB%25A3%25A8%25EC%2585%2598%26entry%3Dpll%26fromNxList%3Dtrue%26originalQuery%3D%25EB%2584%25A4%25EC%258A%25A4%25ED%258A%25B8%25EC%2586%2594%25EB%25A3%25A8%25EC%2585%2598%26x%3D%26y%3D&searchType=place" target="_blank" rel="noopener noreferrer" className="content-stretch flex h-[52.667px] items-center justify-between pb-[16.667px] pt-[16px] relative shrink-0 w-full hover:bg-slate-50 transition-colors cursor-pointer" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <Text6 />
      <Container10 />
    </a>
  );
}

function Container5() {
  return (
    <div className="h-[232px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[4px] pt-[8px] px-[16px] relative size-full">
        <Link />
        <Link1 />
        <Link2 />
        <Container9 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#1d293d] text-[18px] top-[-1px] whitespace-nowrap">병원 컨설팅 전문가 김상연입니다</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute h-[20px] left-0 top-[4px] w-[5.854px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.33px] whitespace-nowrap">•</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text8 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-[13.85px] not-italic text-[#314158] text-[14px] top-[-0.33px] whitespace-nowrap">18년 이상 임상 경력</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute h-[20px] left-0 top-[4px] w-[5.854px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.33px] whitespace-nowrap">•</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text9 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-[13.5px] not-italic text-[#314158] text-[14px] top-[4px] whitespace-nowrap">CS, 인력, 운영 프로세스 전면 최적화</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute h-[20px] left-0 top-[4px] w-[5.854px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.33px] whitespace-nowrap">•</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text10 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-[14.5px] not-italic text-[#314158] text-[14px] top-[4px] whitespace-nowrap">의원부터 병원까지 다양한 프로젝트 경험</p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[88px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p9a09200} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#fee500] relative rounded-[22369600px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[4px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[160.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[24px] left-[80px] not-italic text-[16px] text-center text-white top-[-1.67px] whitespace-nowrap">카카오톡 1:1 상담하기</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <a href="https://pf.kakao.com/_HStBn" target="_blank" rel="noopener noreferrer" className="bg-[#1d293d] h-[52px] relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 w-full hover:bg-[#2d3d4d] transition-colors cursor-pointer block" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[76.813px] py-[14px] relative size-full">
          <Container12 />
          <Text11 />
        </div>
      </div>
    </a>
  );
}

function Heading1() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[#1d293d] text-[18px] top-[-0.67px] w-[346px] whitespace-pre-wrap">
        {`네스트솔루션, `}
        <br aria-hidden="true" />
        당신의 병원을 든든하게 지킵니다.
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#314158] text-[14px] top-0 w-[346px]">
        <p className="leading-[22.75px] mb-0">{`네스트솔루션은 'High Performance'라는 가치 아래`}</p>
        <p className="leading-[22.75px]">고객님의 성공적인 병원을 지키기 위해 탄생했습니다.</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[68.25px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#314158] text-[14px] top-0 w-[346px] whitespace-pre-wrap">
        <p className="leading-[22.75px] mb-0">
          {`18년 임상 경험을 기반으로 원장님의 고민을 ‘진심으로’ `}
          <br aria-hidden="true" />
          이해합니다.
        </p>
        <p className="leading-[22.75px]">획일적 패키지 대신 우리 병원만의 전략을 설계합니다.</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#314158] text-[14px] top-0 w-[346px]">
        <p className="leading-[22.75px] mb-0">어떤 위험 앞에서도 흔들림 없는</p>
        <p className="leading-[22.75px]">병원 파트너가 되어 든든한 지원을 약속드립니다.</p>
      </div>
    </div>
  );
}

function Frame() {
  return <div className="h-[312px] shrink-0 w-[355px]" />;
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[261.25px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Paragraph />
      <Paragraph1 />
      <Paragraph2 />
      <Frame />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M2.5 6.5L4.5 8.5L9.5 3.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#2b7fff] relative rounded-[6px] shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[2px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[74.927px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d293d] text-[14px] top-[-0.33px] whitespace-nowrap">주요 서비스</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Text12 />
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute h-[20px] left-0 top-[4px] w-[5.854px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.33px] whitespace-nowrap">•</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text13 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-[14.5px] not-italic text-[#314158] text-[14px] top-[3.75px] whitespace-nowrap">유지보수 서비스: 안정적인 시스템 운영 지원</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute h-[20px] left-0 top-[4px] w-[5.854px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.33px] whitespace-nowrap">•</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text14 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-[13.5px] not-italic text-[#314158] text-[14px] top-[3.75px] whitespace-nowrap">맞춤형 컨설팅: 병원별 맞춤형 전략 수립</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute h-[20px] left-0 top-[4px] w-[5.854px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#62748e] text-[14px] top-[-0.33px] whitespace-nowrap">•</p>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute h-[40px] left-[13.85px] top-0 w-[308.146px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-[-0.35px] not-italic text-[#314158] text-[14px] top-[4.75px] w-[309px]">시스템 구축: CS관리, 체계적 시스템 설계 및 구축</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[28px] relative shrink-0 w-[322px]" data-name="List Item">
      <Text15 />
      <Text16 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[92px] items-start pl-[24px] relative shrink-0 w-[345px]" data-name="List">
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[121px] items-start relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <List1 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1d293d] text-[16px] top-[-1.67px] whitespace-nowrap">우리병원에 맞는 병원 솔루션,</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#314158] text-[14px] top-0 whitespace-nowrap">전문 컨설턴트에게 상담해 보세요. 언제든 문의 주세요.</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[74.75px] items-start pt-[14px] relative shrink-0 w-full" data-name="Container">
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col h-[44px] items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#1d293d] text-[18px] whitespace-nowrap">우리병원에 맞는 솔루션을 찾아드립니다</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[845px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[24px] items-start pt-[16px] px-[16px] relative size-full">
        <Heading />
        <List />
        <Button4 />
        <Container13 />
        <Container14 />
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="aspect-[1080/1350] flex-[1_0_0] min-w-px relative" data-name="NEST SOLUTION 1">
        <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline muted>
          <source src={videoNestSolution} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[1796px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container5 />
      <Container11 />
      <Frame1 />
    </div>
  );
}

function App() {
  return <div className="bg-[#f3f4f6] h-[1307px] shrink-0 w-[383px]" data-name="App" />;
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
    </div>
  );
}

function CreateIdenticalDesign() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[1884px] items-start left-0 top-0 w-[384px]" data-name="Create identical design">
      <Container />
      <Body />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <CreateIdenticalDesign />
    </div>
  );
}