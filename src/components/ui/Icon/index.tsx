import React from "react";
import * as Icons from "lucide-react-native";
import { colors } from "@/src/styles/theme";

interface IconProps {
    name: keyof typeof Icons;
    color?: string;
    size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, color = colors.neutral100, size = 24 }) => {
    const LucideIcon = Icons[name];
    return <LucideIcon color={color} size={size} />;
};
