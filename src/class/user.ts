export interface UserInfo {
    can_use_delayed_payment_methods: boolean;
    is_new_user: boolean;
    subscription: SubscriptionResponseModel;
    xi_api_key: string;
  }

  export interface SubscriptionResponseModel {
    allowed_to_extend_character_limit: boolean;
    can_extend_character_limit: boolean;
    can_extend_voice_limit: boolean;
    can_use_instant_voice_cloning: boolean;
    can_use_professional_voice_cloning: boolean;
    character_count: number;
    character_limit: number;
    currency: string;
    next_character_count_reset_unix: number;
    professional_voice_limit: number;
    status: string;
    tier: string;
    voice_limit: number;
  }

  export interface UserSubscriptionInfo {
    allowed_to_extend_character_limit: boolean;
    can_extend_character_limit: boolean;
    can_extend_voice_limit: boolean;
    can_use_instant_voice_cloning: boolean;
    can_use_professional_voice_cloning: boolean;
    character_count: number;
    character_limit: number;
    currency: string;
    has_open_invoices: boolean;
    next_character_count_reset_unix: number;
    next_invoice: InvoiceResponseModel;
    professional_voice_limit: number;
    status: string;
    tier: string;
    voice_limit: number;
  }
  
  export interface InvoiceResponseModel {
    amount_due_cents: number;
    next_payment_attempt_unix: number;
  }