import React from 'react';
import clsx from 'clsx';
import { LeftMenu } from '../components/LeftMenu';
import { SideComments } from '../components/SideComments';

interface MainLayoutProps {
  hideComments?: boolean;
  hideMenu?: boolean;
  contentFullWidth?: boolean;
  className?: string;
  children?: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  contentFullWidth,
  hideComments,
  hideMenu,
  className,
  children,
}) => {
  return (
    <div className={clsx('wrapper', className)}>
      {!hideMenu && (
        <LeftMenu />
      )}
      <div className={clsx('content', { 'content--full': contentFullWidth })}>{children}</div>
      {!hideComments && (
        <SideComments />
      )}
    </div>
  );
};
