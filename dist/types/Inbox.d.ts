import React from 'react';
interface AccessibilityProps {
    style?: React.CSSProperties;
    color?: string;
    height?: string;
    width?: string;
    className?: string;
    cssClasses?: string;
    title?: string;
    shake?: boolean;
    beat?: boolean;
    rotate?: boolean;
    onClick?: () => void;
}
declare const Inbox: React.FC<AccessibilityProps>;
export default Inbox;
