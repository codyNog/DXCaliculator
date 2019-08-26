export interface SkillObject {
  check: string;
  name: string;
  level: number;
  cost: number;
  limit: string;
  critical: number;
  dice: number;
  fixed: number;
  hp: number;
}

export interface RowInterface {
  fromRow: number;
  toRow: number;
  updated: { level: number };
}
