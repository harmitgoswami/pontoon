import React from 'react';

import { TranslationDiff } from '~/modules/diff';
import { Highlight } from '~/modules/placeable/components/Highlight';
import { getSimplePreview } from '~/utils/message';

import type { TranslationProps } from './GenericTranslation';

function stringifyHighlight(highlightedContent: Array<string | React.ReactElement>): string {
  console.log('highlightedContent', highlightedContent);
  return highlightedContent.map((part) => {
    if (typeof part === 'string') {
      return part;
    }

    const dataMatch = part.props.children.props['data-match']
    return `{ ${dataMatch} }`;
  }).join('');
}

// ALTERNATIVELY: Undo all the above, do a TranslationDiff first, and then pass that object into Highlight
//                Within Highlight, you would have to rewrite the logic to handle the TranslationDiff object
//                instead of needing a child string


export function FluentTranslation({
  content,
  diffTarget,
  search,
}: TranslationProps): React.ReactElement<React.ElementType> {
  const preview = getSimplePreview(content);
  const highlightedContent = Highlight({ children: preview, search });

  if (!diffTarget) {
    return <>{highlightedContent}</>;
  }

  const stringed = stringifyHighlight(highlightedContent);

  const fluentTarget = getSimplePreview(diffTarget);
  return <TranslationDiff base={fluentTarget} target={stringed} />;
}
