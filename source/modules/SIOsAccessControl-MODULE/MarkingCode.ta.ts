/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION MarkingCode */
/**
 * @summary MarkingCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MarkingCode  ::=  INTEGER {
 *   pageTop(1), pageBottom(2), pageTopBottom(3), documentEnd(4),
 *   noNameDisplay(5), noMarkingDisplay(6), unused(7), documentStart(8),
 *   suppressClassName(9)}
 * ```
 */
export type MarkingCode = INTEGER;
/* END_OF_SYMBOL_DEFINITION MarkingCode */

/* START_OF_SYMBOL_DEFINITION MarkingCode_pageTop */
/**
 * @summary MarkingCode_pageTop
 * @constant
 * @type {number}
 */
export const MarkingCode_pageTop: MarkingCode = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION MarkingCode_pageTop */

/* START_OF_SYMBOL_DEFINITION pageTop */
/**
 * @summary MarkingCode_pageTop
 * @constant
 * @type {number}
 */
export const pageTop: MarkingCode = MarkingCode_pageTop; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION pageTop */

/* START_OF_SYMBOL_DEFINITION MarkingCode_pageBottom */
/**
 * @summary MarkingCode_pageBottom
 * @constant
 * @type {number}
 */
export const MarkingCode_pageBottom: MarkingCode = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION MarkingCode_pageBottom */

/* START_OF_SYMBOL_DEFINITION pageBottom */
/**
 * @summary MarkingCode_pageBottom
 * @constant
 * @type {number}
 */
export const pageBottom: MarkingCode = MarkingCode_pageBottom; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION pageBottom */

/* START_OF_SYMBOL_DEFINITION MarkingCode_pageTopBottom */
/**
 * @summary MarkingCode_pageTopBottom
 * @constant
 * @type {number}
 */
export const MarkingCode_pageTopBottom: MarkingCode = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION MarkingCode_pageTopBottom */

/* START_OF_SYMBOL_DEFINITION pageTopBottom */
/**
 * @summary MarkingCode_pageTopBottom
 * @constant
 * @type {number}
 */
export const pageTopBottom: MarkingCode = MarkingCode_pageTopBottom; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION pageTopBottom */

/* START_OF_SYMBOL_DEFINITION MarkingCode_documentEnd */
/**
 * @summary MarkingCode_documentEnd
 * @constant
 * @type {number}
 */
export const MarkingCode_documentEnd: MarkingCode = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION MarkingCode_documentEnd */

/* START_OF_SYMBOL_DEFINITION documentEnd */
/**
 * @summary MarkingCode_documentEnd
 * @constant
 * @type {number}
 */
export const documentEnd: MarkingCode = MarkingCode_documentEnd; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION documentEnd */

/* START_OF_SYMBOL_DEFINITION MarkingCode_noNameDisplay */
/**
 * @summary MarkingCode_noNameDisplay
 * @constant
 * @type {number}
 */
export const MarkingCode_noNameDisplay: MarkingCode = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION MarkingCode_noNameDisplay */

/* START_OF_SYMBOL_DEFINITION noNameDisplay */
/**
 * @summary MarkingCode_noNameDisplay
 * @constant
 * @type {number}
 */
export const noNameDisplay: MarkingCode = MarkingCode_noNameDisplay; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION noNameDisplay */

/* START_OF_SYMBOL_DEFINITION MarkingCode_noMarkingDisplay */
/**
 * @summary MarkingCode_noMarkingDisplay
 * @constant
 * @type {number}
 */
export const MarkingCode_noMarkingDisplay: MarkingCode = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION MarkingCode_noMarkingDisplay */

/* START_OF_SYMBOL_DEFINITION noMarkingDisplay */
/**
 * @summary MarkingCode_noMarkingDisplay
 * @constant
 * @type {number}
 */
export const noMarkingDisplay: MarkingCode = MarkingCode_noMarkingDisplay; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION noMarkingDisplay */

/* START_OF_SYMBOL_DEFINITION MarkingCode_unused */
/**
 * @summary MarkingCode_unused
 * @constant
 * @type {number}
 */
export const MarkingCode_unused: MarkingCode = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION MarkingCode_unused */

/* START_OF_SYMBOL_DEFINITION unused */
/**
 * @summary MarkingCode_unused
 * @constant
 * @type {number}
 */
export const unused: MarkingCode = MarkingCode_unused; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unused */

/* START_OF_SYMBOL_DEFINITION MarkingCode_documentStart */
/**
 * @summary MarkingCode_documentStart
 * @constant
 * @type {number}
 */
export const MarkingCode_documentStart: MarkingCode = 8; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION MarkingCode_documentStart */

/* START_OF_SYMBOL_DEFINITION documentStart */
/**
 * @summary MarkingCode_documentStart
 * @constant
 * @type {number}
 */
export const documentStart: MarkingCode = MarkingCode_documentStart; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION documentStart */

/* START_OF_SYMBOL_DEFINITION MarkingCode_suppressClassName */
/**
 * @summary MarkingCode_suppressClassName
 * @constant
 * @type {number}
 */
export const MarkingCode_suppressClassName: MarkingCode = 9; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION MarkingCode_suppressClassName */

/* START_OF_SYMBOL_DEFINITION suppressClassName */
/**
 * @summary MarkingCode_suppressClassName
 * @constant
 * @type {number}
 */
export const suppressClassName: MarkingCode = MarkingCode_suppressClassName; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION suppressClassName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MarkingCode */
let _cached_decoder_for_MarkingCode: $.ASN1Decoder<MarkingCode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MarkingCode */

/* START_OF_SYMBOL_DEFINITION _decode_MarkingCode */
/**
 * @summary Decodes an ASN.1 element into a(n) MarkingCode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MarkingCode} The decoded data structure.
 */
export function _decode_MarkingCode(el: _Element) {
    if (!_cached_decoder_for_MarkingCode) {
        _cached_decoder_for_MarkingCode = $._decodeInteger;
    }
    return _cached_decoder_for_MarkingCode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MarkingCode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MarkingCode */
let _cached_encoder_for_MarkingCode: $.ASN1Encoder<MarkingCode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MarkingCode */

/* START_OF_SYMBOL_DEFINITION _encode_MarkingCode */
/**
 * @summary Encodes a(n) MarkingCode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MarkingCode, encoded as an ASN.1 Element.
 */
export function _encode_MarkingCode(
    value: MarkingCode,
    elGetter: $.ASN1Encoder<MarkingCode>
) {
    if (!_cached_encoder_for_MarkingCode) {
        _cached_encoder_for_MarkingCode = $._encodeInteger;
    }
    return _cached_encoder_for_MarkingCode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MarkingCode */

/* eslint-enable */
