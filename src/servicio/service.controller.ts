
import { Body, Controller, Param, Post, Put, UseGuards,Get,Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ClientProxyIntegrador } from 'src/common/proxy/client-proxy';
import { ServiceDTO } from './dto/service.dto';
import { ServicesMSG } from 'src/common/constants';
import { IService } from 'src/common/interfaces/services.interface';
@ApiTags('service')
@UseGuards(JwtAuthGuard)
@Controller('api/v2/service')
export class ServiceController {
    constructor(private readonly clientProxy: ClientProxyIntegrador){}
    private _clientProxyService = this.clientProxy.clientProxyService();


    @Post(':id')
    create(@Param('id') userId: string, @Body() serviceDTO: ServiceDTO): Observable<IService> {
        // Set user_id in the serviceDTO
        userId = userId;

        // Optionally set a default rating if not provided
       

        const payload = { serviceDTO, userId, };
        return this._clientProxyService.send(ServicesMSG.CREATE, payload);
    }
    @Get()
    findAll(): Observable<IService[]>{
        return this._clientProxyService.send(ServicesMSG.FIND_ALL,'');
    }

    @Get(':id')
    findOne(@Param('id') id: string): Observable<IService>{
        return this._clientProxyService.send(ServicesMSG.FIND_ONE,id);
    }

    @Put(':id')
    update(@Param('id')id:string, @Body() serviceDTO:ServiceDTO): Observable<IService>{
        return this._clientProxyService.send(ServicesMSG.UPDATE,{id,serviceDTO});
    }

    @Delete(':id')
    delete(@Param('id') id:string): Observable<any>{
        return this._clientProxyService.send(ServicesMSG.DELETE,id);
    }
    
    @Get(':serviceId/horarios-disponibles/:year/:month/:day')
    getAvailableHours(
        @Param('serviceId') serviceId: string,
        @Param('year') year: number,
        @Param('month') month: number,
        @Param('day') day: number,
    ): Observable<string[]> {
        const date = new Date(year, month - 1, day); // Month in JavaScript Date object is 0-indexed
        return this._clientProxyService.send(ServicesMSG.GET_AVAILABLE_HOURS, { serviceId, date });
    }
    @Get('/top/requested')
    findTopRequested(): Observable<IService[]> {
        return this._clientProxyService.send(ServicesMSG.FIND_TOP_REQUESTED, '');
    }

    @Get('/reports/total-sales/:servicioId')
    getTotalSales(@Param('servicioId') servicioId: string): Observable<number> {
        return this._clientProxyService.send(ServicesMSG.GET_TOTAL_SALES, servicioId);
    }

    @Get('/reports/monthly-sales/:servicioId')
    getMonthlySales(@Param('servicioId') servicioId: string): Observable<{ month: string, total: number }[]> {
        return this._clientProxyService.send(ServicesMSG.GET_MONTHLY_SALES, servicioId);
    }

    @Get('/reports/annual-sales/:servicioId')
    getAnnualSales(@Param('servicioId') servicioId: string): Observable<{ year: string, total: number }[]> {
        return this._clientProxyService.send(ServicesMSG.GET_ANNUAL_SALES, servicioId);
    }

    @Get('/reports/top-services/:userId')
    getTopServices(@Param('userId') userId: string): Observable<IService[]> {
        return this._clientProxyService.send(ServicesMSG.GET_TOP_SERVICES, userId);
    }

}
