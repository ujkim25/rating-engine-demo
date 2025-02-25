import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsDateString } from 'class-validator';

export class RatingEngineDto {
  @ApiProperty()
  @IsNumber()
  quote_id: number;

  @ApiProperty()
  @IsString()
  policy_id: string;

  @ApiProperty()
  @IsString() // 필요하면 @IsDateString()
  pol_date: string;

  @ApiProperty()
  @IsString() // 필요하면 @IsDateString()
  pol_prem_rcpt_dt: string;

  @ApiProperty()
  @IsString()
  pol_renewal_of: string;

  @ApiProperty()
  @IsString()
  ins_name: string;

  @ApiProperty()
  @IsString()
  ins_addr1: string;

  @ApiProperty()
  @IsString()
  ins_addr2: string;

  @ApiProperty()
  @IsString()
  ins_addr3: string;

  @ApiProperty()
  @IsString()
  ins_factor: string;

  @ApiProperty()
  @IsString()
  ins_marital: string;

  @ApiProperty()
  @IsString()
  ins_rank: string;

  @ApiProperty()
  @IsString()
  ins_tel_home: string;

  @ApiProperty()
  @IsString()
  ins_tel_office: string;

  @ApiProperty()
  @IsString() // 필요하면 @IsDateString()
  ins_birthdate: string;

  @ApiProperty()
  @IsNumber()
  ins_age: number;

  @ApiProperty()
  @IsString()
  ins_pay_grade: string;

  @ApiProperty()
  @IsString()
  ins_in_charge: string;

  @ApiProperty()
  @IsString() // 필요하면 @IsDateString()
  pol_term_orig_eff_dt: string;

  @ApiProperty()
  @IsString() // 필요하면 @IsDateString()
  pol_term_from_dt: string;

  @ApiProperty()
  @IsString()
  pol_term_time: string;

  @ApiProperty()
  @IsNumber()
  pol_term_month: number;

  @ApiProperty()
  @IsString() // 필요하면 @IsDateString()
  pol_term_to_dt: string;

  @ApiProperty()
  @IsString()
  pol_term_cc: string;

  @ApiProperty()
  @IsNumber()
  veh_year_model: number;

  @ApiProperty()
  @IsString()
  veh_trade_name: string;

  @ApiProperty()
  @IsString()
  veh_spec: string;

  @ApiProperty()
  @IsString()
  veh_lic_plate1: string;

  @ApiProperty()
  @IsString()
  veh_lic_plate2: string;

  @ApiProperty()
  @IsString()
  veh_lic_plate3: string;

  @ApiProperty()
  @IsString()
  veh_lic_plate4: string;

  @ApiProperty()
  @IsString()
  veh_lic_plate5: string;

  @ApiProperty()
  @IsString()
  veh_car_typecd: string;

  @ApiProperty()
  @IsString()
  veh_serial_no: string;

  @ApiProperty()
  @IsString() // 필요하면 @IsDateString()
  veh_next_ins_dt: string;

  @ApiProperty()
  @IsString()
  veh_jci_co: string;

  @ApiProperty()
  @IsString()
  veh_jci_exp: string;

  @ApiProperty()
  @IsString()
  veh_jci_pol: string;

  @ApiProperty()
  @IsNumber()
  pol_data_new: number;

  @ApiProperty()
  @IsNumber()
  pol_data_ren: number;

  @ApiProperty()
  @IsString()
  pol_data_car_class: string;

  @ApiProperty()
  @IsString()
  pol_data_ao_misc: string;

  @ApiProperty()
  @IsString()
  pol_data_grade: string;

  @ApiProperty()
  @IsString()
  pol_data_code: string;

  @ApiProperty()
  @IsString() // 필요하면 @IsDateString()
  pol_data_date: string;

  @ApiProperty()
  @IsString()
  pol_data_memo: string;

  @ApiProperty()
  @IsString()
  prm_comp_ded: string;

  @ApiProperty()
  @IsNumber()
  prm_comp_limit: number;

  @ApiProperty()
  @IsNumber()
  prm_comp_premium: number;

  @ApiProperty()
  @IsString()
  prm_coll_ded: string;

  @ApiProperty()
  @IsNumber()
  prm_coll_limit: number;

  @ApiProperty()
  @IsNumber()
  prm_coll_premium: number;

  @ApiProperty()
  @IsNumber()
  prm_loss_limit: number;

  @ApiProperty()
  @IsNumber()
  prm_loss_premium: number;

  @ApiProperty()
  @IsNumber()
  prm_bi_limit: number;

  @ApiProperty()
  @IsNumber()
  prm_bi_premium: number;

  @ApiProperty()
  @IsNumber()
  prm_pd_limit: number;

  @ApiProperty()
  @IsNumber()
  prm_pd_premium: number;

  @ApiProperty()
  @IsNumber()
  prm_medpay_limit: number;

  @ApiProperty()
  @IsNumber()
  prm_medpay_premium: number;

  @ApiProperty()
  @IsNumber()
  prm_gross_premium: number;

  @ApiProperty()
  @IsNumber()
  prm_sports_car: number;

  @ApiProperty()
  @IsNumber()
  prm_applied_disc: number;

  @ApiProperty()
  @IsNumber()
  prm_net_premium: number;

  @ApiProperty()
  @IsNumber()
  prm_min_premium_pct: number;

  @ApiProperty()
  @IsNumber()
  prm_min_premium: number;

  @ApiProperty()
  @IsNumber()
  prm_short_rate: number;

  @ApiProperty()
  @IsNumber()
  prm_total_premium: number;

  @ApiProperty()
  @IsString()
  other_item5a: string;

  @ApiProperty()
  @IsString()
  other_item5b: string;

  @ApiProperty()
  @IsNumber()
  other_amt_enc: number;

  @ApiProperty()
  @IsString() // 필요하면 @IsDateString()
  other_final_note_dt: string;

  @ApiProperty()
  @IsString()
  other_item8: string;

  @ApiProperty()
  @IsString()
  decl_youth: string;

  @ApiProperty()
  @IsString()
  decl_acc1: string;

  @ApiProperty()
  @IsString()
  decl_acc2: string;

  @ApiProperty()
  @IsString()
  decl_acc3: string;

  @ApiProperty()
  @IsString()
  decl_pol1: string;

  @ApiProperty()
  @IsString()
  decl_pol2: string;

  @ApiProperty()
  @IsString()
  decl_pol3: string;

  @ApiProperty()
  @IsString()
  decl_dem: string;

  @ApiProperty()
  @IsString()
  txn_status: string;

  @ApiProperty()
  @IsString()
  uw_status: string;

  @ApiProperty()
  @IsString()
  uw_message: string;
}