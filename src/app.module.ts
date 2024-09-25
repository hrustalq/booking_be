import { Module } from '@nestjs/common';
import { BranchesModule } from './branches/branches.module';
import { ZonesModule } from './zones/zones.module';
import { EndpointsModule } from './endpoints/endpoints.module';
import { UsersModule } from './users/users.module';
import { BookingsModule } from './bookings/bookings.module';
import { NewsModule } from './news/news.module';
import { NotificationsModule } from './notifications/notifications.module';
import { PaymentsModule } from './payments/payments.module';
import { MailerModule } from './mailer/mailer.module';

@Module({
  imports: [
    BranchesModule,
    ZonesModule,
    EndpointsModule,
    UsersModule,
    BookingsModule,
    NewsModule,
    NotificationsModule,
    PaymentsModule,
    MailerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
