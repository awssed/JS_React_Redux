import React, { ReactNode, MouseEventHandler } from 'react';

interface LinkProps {
    active: boolean;
    children: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const Link: React.FC<LinkProps> = ({ active, children, onClick }) => (
    <button
        onClick={onClick}
        disabled={active}
        style={{
            marginLeft: '4px',
        }}
    >
        {children}
    </button>
);

export default Link;