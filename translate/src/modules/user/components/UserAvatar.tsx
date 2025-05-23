import React from 'react';
import { Localized } from '@fluent/react';

import './UserAvatar.css';

type Props = {
  username: string;
  title?: string;
  imageUrl: string;
  userBanner: string[];
};

export function UserAvatar(props: Props): React.ReactElement<'div'> {
  const { username, title, imageUrl, userBanner } = props;
  const [status, tooltip] = userBanner;

  return (
    <div className='user-avatar'>
      <a
        href={`/contributors/${username}`}
        title={title}
        target='_blank'
        rel='noopener noreferrer'
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        <div className='avatar-container'>
          <Localized id='user-UserAvatar--alt-text' attrs={{ alt: true }}>
            <img src={imageUrl} alt='User Profile' height='44' width='44' />
          </Localized>
          {status && (
            <span className={`user-banner ${status}`} title={tooltip}>
              {status}
            </span>
          )}
        </div>
      </a>
    </div>
  );
}
