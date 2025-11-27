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
      className="group bg-white rounded-lg border border-slate-100 p-4 shadow-sm hover:shadow-glow-hover hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 relative overflow-hidden"
    >
      {/* Icon Placeholder */}
      <div className={`shrink-0 w-12 h-12 rounded-lg ${item.iconColor} flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300`}>
        {item.iconInitial}
      </div>

      <div className="flex-1 min-w-0 z-10">
        <div className="flex justify-between items-start">
          <h4 className="text-slate-800 font-bold text-sm truncate group-hover:text-blue-600 transition-colors">
            {item.name}
          </h4>
          <ExternalLink size={12} className="text-slate-300 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <p className="mt-1.5 text-xs text-slate-500 line-clamp-2 leading-relaxed group-hover:text-slate-600">
          {item.description}
        </p>
      </div>

      {item.isHot && (
        <div className="absolute top-0 right-0 z-20">
            <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 m-1"></span>
            </span>
        </div>
      )}
      
      {/* Tech Background Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/0 via-blue-50/0 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </a>
  );
};

export default ResourceCard;