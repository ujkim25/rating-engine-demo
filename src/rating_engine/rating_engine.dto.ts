import { ApiProperty } from '@nestjs/swagger';

export class RatingEngineDto {
  @ApiProperty()
  quote_id: number;

  @ApiProperty()
  policy_id: string;

  @ApiProperty()
  pol_date: string;

  @ApiProperty()
  pol_prem_rcpt_dt: string;

  @ApiProperty()
  pol_renewal_of: string;

  @ApiProperty()
  ins_name: string;

  @ApiProperty()
  ins_addr1: string;

  @ApiProperty()
  ins_addr2: string;

  @ApiProperty()
  ins_addr3: string;

  @ApiProperty()
  ins_factor: string;

  @ApiProperty()
  "ins-marital": string;

  @ApiProperty()
  "ins-rank": string;

  @ApiProperty()
  ins_tel_home: string;

  @ApiProperty()
  ins_tel_office: string;

  @ApiProperty()
  ins_birthdate: string;

  @ApiProperty()
  ins_age: number;

  @ApiProperty()
  ins_pay_grade: string;

  @ApiProperty()
  ins_in_charge: string;

  @ApiProperty()
  pol_term_orig_eff_dt: string;

  @ApiProperty()
  pol_term_from_dt: string;

  @ApiProperty()
  pol_term_time: string;

  @ApiProperty()
  pol_term_month: number;

  @ApiProperty()
  pol_term_to_dt: string;

  @ApiProperty()
  pol_term_cc: string;

  @ApiProperty()
  veh_year_model: number;

  @ApiProperty()
  veh_trade_name: string;

  @ApiProperty()
  veh_spec: string;

  @ApiProperty()
  veh_lic_plate1: string;

  @ApiProperty()
  veh_lic_plate2: string;

  @ApiProperty()
  veh_lic_plate3: string;

  @ApiProperty()
  veh_lic_plate4: string;

  @ApiProperty()
  veh_lic_plate5: string;

  @ApiProperty()
  veh_car_typecd: string;

  @ApiProperty()
  veh_serial_no: string;

  @ApiProperty()
  veh_next_ins_dt: string;

  @ApiProperty()
  veh_jci_co: string;

  @ApiProperty()
  veh_jci_exp: string;

  @ApiProperty()
  veh_jci_pol: string;

  @ApiProperty()
  pol_data_new: number;

  @ApiProperty()
  pol_data_ren: number;

  @ApiProperty()
  pol_data_car_class: string;

  @ApiProperty()
  pol_data_ao_misc: string;

  @ApiProperty()
  pol_data_grade: string;

  @ApiProperty()
  pol_data_code: string;

  @ApiProperty()
  pol_data_date: string;

  @ApiProperty()
  pol_data_memo: string;

  @ApiProperty()
  prm_comp_ded: string;

  @ApiProperty()
  prm_comp_limit: number;

  @ApiProperty()
  prm_comp_premium: number;

  @ApiProperty()
  prm_coll_ded: string;

  @ApiProperty()
  prm_coll_limit: number;

  @ApiProperty()
  prm_coll_premium: number;

  @ApiProperty()
  prm_loss_limit: number;

  @ApiProperty()
  prm_loss_premium: number;

  @ApiProperty()
  prm_bi_limit: number;

  @ApiProperty()
  prm_bi_premium: number;

  @ApiProperty()
  prm_pd_limit: number;

  @ApiProperty()
  prm_pd_premium: number;

  @ApiProperty()
  prm_medpay_limit: number;

  @ApiProperty()
  prm_medpay_premium: number;

  @ApiProperty()
  prm_gross_premium: number;

  @ApiProperty()
  prm_sports_car: number;

  @ApiProperty()
  prm_applied_disc: number;

  @ApiProperty()
  prm_net_premium: number;

  @ApiProperty()
  prm_min_premium_pct: number;

  @ApiProperty()
  prm_min_premium: number;

  @ApiProperty()
  prm_short_rate: number;

  @ApiProperty()
  prm_total_premium: number;

  @ApiProperty()
  other_item5a: string;

  @ApiProperty()
  other_item5b: string;

  @ApiProperty()
  other_amt_enc: number;

  @ApiProperty()
  other_final_note_dt: string;

  @ApiProperty()
  other_item8: string;

  @ApiProperty()
  decl_youth: string;

  @ApiProperty()
  decl_acc1: string;

  @ApiProperty()
  decl_acc2: string;

  @ApiProperty()
  decl_acc3: string;

  @ApiProperty()
  decl_pol1: string;

  @ApiProperty()
  decl_pol2: string;

  @ApiProperty()
  decl_pol3: string;

  @ApiProperty()
  decl_dem: string;

  @ApiProperty()
  txn_status: string;

  @ApiProperty()
  uw_status: string;

  @ApiProperty()
  uw_message: string;
}