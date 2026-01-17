import { motion } from 'framer-motion';
import { Server, Database, Shield, Layout, CreditCard, TestTube, Zap } from 'lucide-react';

interface SectionHeaderProps {
  section: string;
  index: number;
}

const sectionIcons: Record<string, React.ReactNode> = {
  Backend: <Server className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
  Admin: <Shield className="w-6 h-6" />,
  Frontend: <Layout className="w-6 h-6" />,
  Payments: <CreditCard className="w-6 h-6" />,
  Testing: <TestTube className="w-6 h-6" />,
  Scalability: <Zap className="w-6 h-6" />,
};

const sectionColors: Record<string, string> = {
  Backend: 'from-purple-500 to-purple-600',
  Database: 'from-blue-500 to-blue-600',
  Admin: 'from-red-500 to-red-600',
  Frontend: 'from-teal-500 to-teal-600',
  Payments: 'from-amber-500 to-amber-600',
  Testing: 'from-pink-500 to-pink-600',
  Scalability: 'from-emerald-500 to-emerald-600',
};

export default function SectionHeader({ section, index }: SectionHeaderProps) {
  const icon = sectionIcons[section] || <Server className="w-6 h-6" />;
  const gradient = sectionColors[section] || 'from-gray-500 to-gray-600';

  return (
    <motion.div
      className="mb-8 mt-12 first:mt-0"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${gradient} text-white shadow-lg`}>
        {icon}
        <h2 className="text-xl font-bold">{section}</h2>
      </div>
    </motion.div>
  );
}
