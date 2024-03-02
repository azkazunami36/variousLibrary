import { textLength } from "../textLength/main";

/**
 * スペースで文字の長さを均等にすることが出来ます。
 * ```js
 * const string = "テスト";
 * console.log("[" + string + "]"); // [こんにちは]
 * console.log("[" + string) + marginLengthFixed(string, 15, { precisely: true }) + "]"); // [こんにちは   ]
 * console.log("[" + string) + marginLengthFixed("おはよう", 15, { precisely: true }) + "]"); // [おはよう     ]
 * console.log("[" + string) + marginLengthFixed("Hello!", 15, { precisely: true }) + "]"); // [Hello!         ]
 * ```
 * @param string
 * @param length
 * @param option
 * @returns
 */
export function marginLengthFixed(
    string: string,
    length: number,
    option?: { overflowCut?: boolean; spacePosition: "first" | "last"; precisely: boolean },
) {
    const stringLength = option?.precisely ? textLength(string) : string.length;
    const requireSpaceMargin = length - stringLength;
    let space = "";
    if (requireSpaceMargin > 0) for (let i = 0; i <= requireSpaceMargin; i++) space += " ";
    
    return string;
}
