// styled.d.ts
import "styled-components";

import { ThemeType } from "interfaces/styled";

declare module "styled-components" {
    export interface DefaultTheme extends ThemeType {}
}
