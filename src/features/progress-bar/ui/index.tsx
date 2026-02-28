import { RefreshCcw } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { Badge } from '@/shared/ui/badge';
import { useProgressBar } from '../model';
export function ProgressBar() {
  const { activeIndex, items, handleClick } = useProgressBar();
  return (
    <article className={`p-4 flex flex-row justify-between`}>
      <Badge variant="outline" className="px-4">
        Вопрос {activeIndex + 1} из {items.length}
      </Badge>
      <Button
        onClick={handleClick}
        variant="outline"
        size="icon-sm"
        aria-label="refresh"
      >
        <RefreshCcw />
      </Button>
    </article>
  );
}
