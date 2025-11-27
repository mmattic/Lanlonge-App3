import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ResourceItem } from '../types';

interface Props {
  item: ResourceItem;
}

const ResourceCard: React.FC<Props> = ({ item }) => {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white rounded-xl border border-slate-100 p-4 shadow-sm hover:shadow-md hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 relative overflow-hidden"
    >
      {/* Icon Placeholder */}
      <div className={`shrink-0 w-12 h-12 rounded-xl ${item.iconColor} flex items-center justify-center text-white font-bold text-lg shadow-inner`}>
        {item.iconInitial}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <h4 className="text-slate-800 font-bold text-sm truncate group-hover:text-blue-600 transition-colors">
            {item.name}
          </h4>
          <ExternalLink size={12} className="text-slate-300 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <p className="mt-1 text-xs text-slate-500 line-clamp-2 leading-relaxed">
          {item.description}
        </p>
      </div>

      {item.isHot && (
        <div className="absolute top-0 right-0">
            <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 m-0.5"></span>
            </span>
        </div>
      )}
    </a>
  );
};

export default ResourceCard;
