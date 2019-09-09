import { syndromeKind, worksKind, urgeKind, awakenKind } from "./variables";
import { skillFixedInterface } from "../interface";

interface worksStatusInterface {
  statusPoint: number[];
  skillFixed: skillFixedInterface[];
}

const syndromeStatus = (syndrome: string): number[] => {
  switch (syndrome) {
    case syndromeKind[1]:
      return [0, 3, 1, 0];
    case syndromeKind[2]:
      return [0, 1, 2, 0];
    case syndromeKind[3]:
      return [2, 1, 1, 0];
    case syndromeKind[4]:
      return [1, 2, 1, 0];
    case syndromeKind[5]:
      return [3, 0, 0, 1];
    case syndromeKind[6]:
      return [2, 1, 0, 1];
    case syndromeKind[7]:
      return [1, 1, 1, 1];
    case syndromeKind[8]:
      return [1, 2, 0, 1];
    case syndromeKind[9]:
      return [0, 0, 3, 1];
    case syndromeKind[10]:
      return [0, 1, 1, 2];
    case syndromeKind[11]:
      return [2, 0, 1, 1];
    case syndromeKind[12]:
      return [0, 0, 1, 3];
    case syndromeKind[13]:
      return [1, 1, 2, 0];
    default:
      return [0, 0, 0, 0];
  }
};

const awakenErosion = (value: string): number => {
  switch (value) {
    case awakenKind[1]:
    case awakenKind[11]:
      return 18;
    case awakenKind[2]:
    case awakenKind[5]:
    case awakenKind[9]:
    case awakenKind[12]:
      return 17;
    case awakenKind[4]:
    case awakenKind[10]:
      return 14;
    case awakenKind[3]:
    case awakenKind[7]:
      return 16;
    case awakenKind[6]:
    case awakenKind[8]:
      return 15;
    default:
      return 0;
  }
};

const urgeErosion = (value: string): number => {
  switch (value) {
    case urgeKind[1]:
    case urgeKind[4]:
    case urgeKind[12]:
      return 18;
    case urgeKind[2]:
    case urgeKind[11]:
      return 17;
    case urgeKind[3]:
    case urgeKind[9]:
      return 14;
    case urgeKind[5]:
    case urgeKind[8]:
      return 16;
    case urgeKind[6]:
    case urgeKind[7]:
      return 15;
    default:
      return 0;
  }
};

const worksStatus = (works: string): worksStatusInterface => {
  switch (works) {
    case worksKind[1]:
      return {
        statusPoint: [0, 1, 0, 0],
        skillFixed: [
          { name: "知覚", value: 2 },
          { name: "意志", value: 1 },
          { name: "RC", value: 1 },
          { name: "情報:噂話", value: 1 }
        ]
      };
    case worksKind[2]:
      return {
        statusPoint: [0, 1, 0, 0],
        skillFixed: [
          { name: "知覚", value: 1 },
          { name: "意志", value: 1 },
          { name: "RC", value: 2 },
          { name: "情報:噂話", value: 1 }
        ]
      };
    case worksKind[3]:
      return {
        statusPoint: [1, 0, 0, 0],
        skillFixed: [
          { name: "回避", value: 1 },
          { name: "知覚", value: 1 },
          { name: "RC", value: 2 },
          { name: "情報:噂話", value: 1 }
        ]
      };
    default:
      return {
        statusPoint: [0, 0, 0, 0],
        skillFixed: [
          {
            name: "",
            value: 0
          }
        ]
      };
  }
};

export { syndromeStatus, worksStatus, awakenErosion, urgeErosion };
