'use client';

import { cn } from '@/lib/utils';
import { ExternalLinkIcon } from './icons';

interface SearchResult {
  title: string;
  url: string;
  description?: string;
  source?: string;
  favicon?: string;
}

interface SearchResultsProps {
  results: SearchResult[];
  title?: string;
}

export function SearchResults({
  results,
  title = 'Search Results...',
}: SearchResultsProps) {
  if (!results.length) return null;

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mt-4 mb-2">
        <span className="text-sm font-medium">Sources</span>
      </div>
      <div className="grid gap-2">
        {results.map((result, i) => (
          <a
            key={i}
            href={result.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'flex items-center justify-between w-full px-3 py-2 text-sm',
              'rounded-lg border bg-background hover:bg-accent transition-colors',
              'group cursor-pointer'
            )}
          >
            <div className="flex items-center gap-2">
              {result.favicon && (
                <img 
                  src={result.favicon} 
                  alt=""
                  className="w-4 h-4 rounded-sm"
                />
              )}
              <span className="font-medium">{result.title}</span>
            </div>
            <ExternalLinkIcon
              size={14}
              className="shrink-0 text-muted-foreground group-hover:text-foreground transition-colors"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
