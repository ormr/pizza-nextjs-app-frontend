import React from 'react';
import Link from 'next/link';
import { Button } from '../Button';

interface ProfileButtonProps {
  disabled: boolean;
  userId: string | undefined;
}

export const ProfileButton: React.FC<ProfileButtonProps> = ({
  disabled,
  userId,
}) => {
  const href = userId ? `/profile/${userId}` : '/login';
  const buttonText = userId ? 'Профиль' : 'Войти';
  return (
    <>
      {disabled ? (
        <Link href={href}>
          <a>
            <Button type="tertiary" size="small">
              {buttonText}
            </Button>
          </a>
        </Link>
      ) : null}
    </>
  );
};
