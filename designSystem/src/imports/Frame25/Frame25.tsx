function CtaBtn() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[24px] py-[8px] relative rounded-[4px] shrink-0" data-name="ctaBtn2">
      <div aria-hidden="true" className="absolute border border-[#217446] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#217446] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[normal]">本期目錄</p>
      </div>
    </div>
  );
}

function CtaBtn1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[24px] py-[8px] relative rounded-[4px] shrink-0" data-name="ctaBtn2">
      <div aria-hidden="true" className="absolute border border-[#217446] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#217446] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[normal]">線上購買</p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative size-full">
      <CtaBtn />
      <CtaBtn1 />
    </div>
  );
}