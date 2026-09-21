import { IsDateString, IsOptional } from 'class-validator';

// month is any date string inside the target month (e.g. "2026-10-01");
// only the year/month are used. Defaults to the current month if omitted.
export class GenerateRentDTO {
  @IsDateString()
  @IsOptional()
  month?: string;
}
