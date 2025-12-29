export default function DashboardHeader() {
  // 와이어프레임 단계용 고정 타임스탬프
  const generatedAt = '2025.12.27 14:12';
  return (
    <header>
      <h1 className="text-2xl font-semibold tracking-tight text-white">
        한국 경제 계기판
      </h1>
      <p className="mt-1 text-sm text-neutral-100">
        계기판 조회 시각 {generatedAt}
      </p>
      <span className="text-xs text-neutral-400">
        지표별 기준 시각은 각 카드에서 확인해주세요.
      </span>
    </header>
  );
}
