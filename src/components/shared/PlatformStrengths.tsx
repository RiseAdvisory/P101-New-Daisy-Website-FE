import { StatisticHighlight } from '@/components/geo/StatisticHighlight';
import {
  Bot,
  CalendarCheck,
  Users,
  CreditCard,
  UserCog,
  Megaphone,
  BarChart3,
  Palette,
  Clock,
  TrendingUp,
  UserCircle,
  Bell,
  RefreshCw,
  ImageIcon,
  Box,
} from 'lucide-react';
import { ReactNode } from 'react';

interface PlatformStrengthsProps {
  headline: string;
  subHeadline: string;
  capabilities: Array<{
    label: string;
    description: string;
  }>;
  stats: Array<{
    value: string;
    context: string;
    source?: string;
  }>;
  hideStats?: boolean;
}

const iconMap: Record<string, ReactNode> = {
  'AI Receptionist': <Bot className="w-6 h-6" />,
  'Smart Booking': <CalendarCheck className="w-6 h-6" />,
  'Customer Acquisition': <Users className="w-6 h-6" />,
  'Payments & Invoicing': <CreditCard className="w-6 h-6" />,
  'Staff Management': <UserCog className="w-6 h-6" />,
  'Marketing Engine': <Megaphone className="w-6 h-6" />,
  'Analytics Dashboard': <BarChart3 className="w-6 h-6" />,
  'Brand Control': <Palette className="w-6 h-6" />,
  'Flexible Scheduling': <Clock className="w-6 h-6" />,
  'Client Management': <Users className="w-6 h-6" />,
  'Earnings Tracker': <TrendingUp className="w-6 h-6" />,
  'Professional Profile': <UserCircle className="w-6 h-6" />,
  'Notifications': <Bell className="w-6 h-6" />,
  'Calendar Sync': <RefreshCw className="w-6 h-6" />,
  'Portfolio': <ImageIcon className="w-6 h-6" />,
  'AI Booking Assistant': <Bot className="w-6 h-6" />,
  'Smart Notifications': <Bell className="w-6 h-6" />,
  'Marketplace Visibility': <Users className="w-6 h-6" />,
  // Arabic labels
  'موظف استقبال ذكي': <Bot className="w-6 h-6" />,
  'حجز ذكي': <CalendarCheck className="w-6 h-6" />,
  'استقطاب العملاء': <Users className="w-6 h-6" />,
  'المدفوعات والفوترة': <CreditCard className="w-6 h-6" />,
  'إدارة الموظفين': <UserCog className="w-6 h-6" />,
  'محرك التسويق': <Megaphone className="w-6 h-6" />,
  'لوحة التحليلات': <BarChart3 className="w-6 h-6" />,
  'التحكم بالعلامة التجارية': <Palette className="w-6 h-6" />,
  'جدولة مرنة': <Clock className="w-6 h-6" />,
  'إدارة العملاء': <Users className="w-6 h-6" />,
  'متتبع الأرباح': <TrendingUp className="w-6 h-6" />,
  'الملف المهني': <UserCircle className="w-6 h-6" />,
  'الإشعارات': <Bell className="w-6 h-6" />,
  'مزامنة التقويم': <RefreshCw className="w-6 h-6" />,
  'معرض الأعمال': <ImageIcon className="w-6 h-6" />,
  'مساعد الحجز الذكي': <Bot className="w-6 h-6" />,
  'إشعارات ذكية': <Bell className="w-6 h-6" />,
  'ظهور في السوق': <Users className="w-6 h-6" />,
};

export function PlatformStrengths({
  headline,
  subHeadline,
  capabilities,
  stats,
  hideStats,
}: PlatformStrengthsProps) {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#172524] text-3xl md:text-4xl font-bold mb-4">
            {headline}
          </h2>
          <p className="text-[#455150] text-lg md:text-xl max-w-2xl mx-auto">
            {subHeadline}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {capabilities.map((cap) => (
            <div
              key={cap.label}
              className="p-6 rounded-xl bg-[#F9FBFB] border border-[#E8E9E9]"
            >
              <div className="text-[#8B6554] mb-3">
                {iconMap[cap.label] ?? <Box className="w-6 h-6" />}
              </div>
              <h3 className="text-[#172524] font-semibold text-lg mb-2">
                {cap.label}
              </h3>
              <p className="text-[#586968] text-sm">{cap.description}</p>
            </div>
          ))}
        </div>

        {!hideStats && (
          <div className="flex flex-wrap justify-center gap-8">
            {stats.map((stat) => (
              <div
                key={stat.context}
                className="text-center px-6 py-4 rounded-lg bg-primary/5"
              >
                <StatisticHighlight
                  value={stat.value}
                  context={stat.context}
                  source={stat.source}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
