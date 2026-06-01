export const ROLES = Object.freeze({
  DOCTOR: 'DOCTOR',
  PHARMACIST: 'PHARMACIST',
  ADMIN: 'ADMIN',
  PATIENT: 'PATIENT',
})

export const PRESCRIPTION_STATUS = Object.freeze({
  PENDING: 'Pending',
  PROCESSING: 'Processing',
  FILLED: 'Filled',
  CANCELLED: 'Cancelled',
})

export const ALERT_TYPES = Object.freeze({
  LOW_STOCK: 'LOW_STOCK',
  EXPIRY: 'EXPIRY',
})
