import React, { useEffect, useMemo, useState } from 'react';
<RadarChart outerRadius={90} data={radarData}>
<PolarGrid />
<PolarAngleAxis dataKey="subject" />
<PolarRadiusAxis angle={30} domain={[0, 3]} />
<Tooltip formatter={(val) => `${val.toFixed(2)} / 3`} />
<Radar name="평균" dataKey="A" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.4} />
</RadarChart>
</ResponsiveContainer>
</div>


<div className="space-y-4">
<div>
<div className="text-sm text-slate-500">의사소통 평균</div>
<div className="text-lg font-semibold">{computed.commAvg.toFixed(2)} / 3 · {computed.commType}</div>
<p className="text-sm text-slate-600 mt-1">2.5↑: 주도적 소통, 1.8~2.5: 협력 균형, 1.8↓: 회피·비주장 경향</p>
</div>
<div>
<div className="text-sm text-slate-500">지속성 평균</div>
<div className="text-lg font-semibold">{computed.persAvg.toFixed(2)} / 3 · {computed.persType}</div>
<p className="text-sm text-slate-600 mt-1">2.5↑: 끈기·회복탄력, 1.8~2.5: 유연 조정, 1.8↓: 포기 경향</p>
</div>
<div>
<div className="text-sm text-slate-500">AI 관심 평균</div>
<div className="text-lg font-semibold">{computed.aiAvg.toFixed(2)} / 3 · {computed.aiType}</div>
<p className="text-sm text-slate-600 mt-1">2.5↑: 탐구·혁신, 1.8~2.5: 실용 탐색, 1.8↓: 회피·불안</p>
</div>
</div>
</div>


{allAnswered && (
<div className="mt-6 p-4 rounded-xl bg-sky-50 border border-sky-200">
<h4 className="font-semibold text-slate-900">개인 맞춤 해석</h4>
<ul className="list-disc pl-5 text-sm text-slate-700 space-y-1 mt-2">
<li>🗣 의사소통: <b>{computed.commType}</b> — 회의/피드백 상황에서 이에 맞는 전략을 추천합니다.</li>
<li>🔁 지속성: <b>{computed.persType}</b> — 장기 과제 설계 및 루틴 최적화에 반영하세요.</li>
<li>🤖 AI 관심: <b>{computed.aiType}</b> — 적합한 AI 학습/도구를 큐레이션하세요.</li>
</ul>
</div>
)}
</div>
</section>


<footer className="mt-10 text-center text-xs text-slate-500">
© {new Date().getFullYear()} AI 심리·의사소통 테스트
</footer>
</div>
</div>
);
}