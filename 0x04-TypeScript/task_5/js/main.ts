type BrandedNumber<T extends string> = number & { __brand: T };

export interface MajorCredits {
  credits: BrandedNumber<'MajorCredits'>;
}

export interface MinorCredits {
  credits: BrandedNumber<'MinorCredits'>;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: (subject1.credits + subject2.credits) as BrandedNumber<'MajorCredits'> };
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: (subject1.credits + subject2.credits) as BrandedNumber<'MinorCredits'> };
}
