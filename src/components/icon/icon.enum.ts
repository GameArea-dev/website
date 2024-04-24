import {lazy} from "@utils/lazy";

export const Icons = {
    MulhouseGaming: lazy(async () => import('../../assets/image/svg/mulhouse-gaming.svg'))
}

export type IconName = keyof typeof Icons;
