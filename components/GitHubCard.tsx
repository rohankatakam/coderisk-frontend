'use client';

import { motion } from 'framer-motion';

interface GitHubCardProps {
  type: 'pr' | 'issue' | 'revert';
  number: string;
  title: string;
  date: string;
  status: 'merged' | 'open' | 'closed';
  delay?: number;
}

export default function GitHubCard({ type, number, title, date, status, delay = 0 }: GitHubCardProps) {
  const getIcon = () => {
    if (type === 'pr' && status === 'merged') return '✅';
    if (type === 'issue') return '🔥';
    if (type === 'revert') return '🔄';
    return '📝';
  };

  const getStatusColor = () => {
    if (status === 'merged') return 'bg-green-100 text-green-800 border-green-300';
    if (status === 'open') return 'bg-red-100 text-red-800 border-red-300';
    return 'bg-gray-100 text-gray-800 border-gray-300';
  };

  const getTypeLabel = () => {
    if (type === 'pr') return 'Pull Request';
    if (type === 'issue') return 'Issue';
    if (type === 'revert') return 'Revert PR';
    return '';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white border-2 border-gray-200 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl">{getIcon()}</span>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs px-2 py-1 rounded-full border ${getStatusColor()} font-medium`}>
              {getTypeLabel()} #{number}
            </span>
            <span className="text-xs text-gray-500">{date}</span>
          </div>
          <h4 className="text-sm font-semibold text-gray-900 leading-tight">
            {title}
          </h4>
          <div className="mt-2 flex items-center gap-2">
            <span className={`text-xs px-2 py-0.5 rounded ${status === 'merged' ? 'bg-purple-100 text-purple-700' : 'bg-orange-100 text-orange-700'}`}>
              {status === 'merged' ? 'Merged' : status === 'open' ? 'Open' : 'Closed'}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
