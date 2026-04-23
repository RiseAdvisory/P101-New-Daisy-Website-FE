import { renderSafeHtml } from '@/lib/utils/htmlContent';

interface CalloutBoxProps {
  type: 'tip' | 'warning' | 'info';
  text: string;
}

const styles: Record<CalloutBoxProps['type'], { bg: string; border: string; icon: string }> = {
  tip: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-300',
    icon: '💡',
  },
  warning: {
    bg: 'bg-amber-50',
    border: 'border-amber-300',
    icon: '⚠️',
  },
  info: {
    bg: 'bg-blue-50',
    border: 'border-blue-300',
    icon: 'ℹ️',
  },
};

export function CalloutBox({ type, text }: CalloutBoxProps) {
  const s = styles[type];
  return (
    <div
      className={`my-6 rounded-xl border-l-4 ${s.border} ${s.bg} p-5`}
      role="note"
    >
      <div className="text-[#455150]">
        <span className="mr-2">{s.icon}</span>
        <span
          dangerouslySetInnerHTML={{
            __html: renderSafeHtml(text),
          }}
        />
      </div>
    </div>
  );
}
