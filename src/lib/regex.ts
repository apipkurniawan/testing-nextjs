export const _onlyAlphanumericCommaAndPoint = /^[a-zA-Z0-9,.]*$/;
export const _onlyNumeric = /^[0-9]*$/;
export const _onlyAlphabet = /^[a-zA-Z\s]*$/;
export const _onlyAlphaNumericSpace = /^[a-zA-Z0-9\s]*$/;
export const _onlyAlphaNumeric = /^[a-zA-Z0-9]*$/;
export const _notAllowSpace = /^(?:[^\s]*)$/;

/* Alamat email */
/* - harus mengandung satu @ */
/* - harus mengandung Dot (.) */
/* - tidak boleh mengandung !'$#%^&()={}[]\/|`~?<>;:, */
/* - boleh mengandung +-*._" */
/* - Dot (.) dan At (@) tidak boleh diawal alamat email */
/* - Dot (.) dan At (@) tidak boleh berdampingan */
/* - tidak boleh mengandung spasi */
export const _emailFormat =
  /^(?![.@])(?!.*[.@]{2})(?!.*[^a-zA-Z0-9@.+\-*"_.])(?!.*\s)[a-zA-Z0-9+*"._-]+@[a-zA-Z0-9+*"._-]+\.[a-zA-Z]{2,}$/;

/* website */
/* - .(dot) tidak boleh berada di akhir string */
/* - mengandung minimal dua .(dot) */
export const _webFormat = /^(?=.*\..*\.).*[^.\s]$/;

/* name */
/* - alfanumerik */
/* - mengandung special character .,' dan spasi */
export const _nameFormat = /^(?!.*[^a-zA-Z0-9\s.,'])[a-zA-Z0-9\s.,']*$/;
