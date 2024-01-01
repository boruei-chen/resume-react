import { SectionIdEnum as MainPageSectionIdEnum } from 'app/features/Main/Main.types';

export interface Props {
  onNavChange: (targetSectionId: MainPageSectionIdEnum) => void;
}

export interface Info {
  height: number;
}
