import { LOCAL } from "../consts/general";

export default function formatNumber(num: number, maximumDigits?: number): string {
    return num.toLocaleString(LOCAL, { maximumFractionDigits: maximumDigits });
}