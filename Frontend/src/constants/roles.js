export const ROLES = {
  DOCTOR: 'DOCTOR',
  PHARMACIST: 'PHARMACIST',
  ADMIN: 'ADMIN',
  PATIENT: 'PATIENT'
};

export const ROLE_LABELS = {
  [ROLES.DOCTOR]: 'Doctor',
  [ROLES.PHARMACIST]: 'Pharmacist',
  [ROLES.ADMIN]: 'Admin',
  [ROLES.PATIENT]: 'Patient'
};

export const ROLE_HOME_PATHS = {
  [ROLES.DOCTOR]: '/dashboard',
  [ROLES.PHARMACIST]: '/pharmacist',
  [ROLES.ADMIN]: '/admin',
  [ROLES.PATIENT]: '/patient'
};

export const ROLE_LOGIN_PATHS = {
  [ROLES.DOCTOR]: '/doctor/login',
  [ROLES.PHARMACIST]: '/pharmacist/login',
  [ROLES.ADMIN]: '/admin/login',
  [ROLES.PATIENT]: '/patient/login'
};