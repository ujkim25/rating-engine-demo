import { Body, Controller, Get, Post } from '@nestjs/common';
import { RatingEngineDto } from './rating_engine.dto';
import { RatingEngineService } from './rating_engine.service';
import { RadarLiveResponse } from './rating_engine.interface';

@Controller('rating-engine')
export class RatingEngineController {
    constructor(private readonly ratingEngineService: RatingEngineService) {}

    @Post()
    async uwCalculate(@Body() dto: RatingEngineDto): Promise<RatingEngineDto> {
        if (dto["ins-rank"] === "Officer") {
            return this.uwDeclined(dto);
        }else {
            return this.uwAccepted(dto);
        }
    }

    uwDeclined(dto: RatingEngineDto) {
        dto.uw_status = "Declined";
        dto.uw_message = `$${dto["ins-rank"]} can not be covered!`;
        return dto;
    }

    async uwAccepted(dto: RatingEngineDto) {
        dto.uw_status = "Accepted"
        dto.uw_message = "";
        const total_premium = await this.ratingEngineService.computePremiumFake(dto);
        // 만약 **await**을 쓰지 않으면, computeInsurance()이 반환하는 Promise 객체만 받게 되고, 실제 결과값을 확인하기 위해서는 .then()이나 콜백으로 접근해야 합니다.
        dto.prm_total_premium = total_premium;
        return dto;
    }
}
