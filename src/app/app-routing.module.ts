import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./_guards";
import { RegisterComponent } from "./register/register.component";
import { VerifyTopComponent } from "./verify-top/verify-top.component";
import { BookingPlanComponent } from "./booking-plan/booking-plan.component";
import { BookingPaymentComponent } from "./booking-payment/booking-payment.component";
import { BookingConfirmationComponent } from "./booking-confirmation/booking-confirmation.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "verify-otp", component: VerifyTopComponent },
  { path: "home", component: HomeComponent },
  { path: "plan-booking", component: BookingPlanComponent },
  { path: "booking-payment", component: BookingPaymentComponent },
  { path: "booking-confirmation", component: BookingConfirmationComponent },
  // otherwise redirect to home
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
