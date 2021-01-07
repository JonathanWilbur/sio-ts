/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Operation */
/**
 * @summary Operation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Operation  ::=  INTEGER {onlyOne(1), oneOrMore(2), all(3)
 * }(onlyOne | oneOrMore | all)
 * ```
 */
export type Operation = INTEGER;
/* END_OF_SYMBOL_DEFINITION Operation */

/* START_OF_SYMBOL_DEFINITION Operation_onlyOne */
/**
 * @summary Operation_onlyOne
 * @constant
 * @type {number}
 */
export const Operation_onlyOne: Operation = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Operation_onlyOne */

/* START_OF_SYMBOL_DEFINITION onlyOne */
/**
 * @summary Operation_onlyOne
 * @constant
 * @type {number}
 */
export const onlyOne: Operation = Operation_onlyOne; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION onlyOne */

/* START_OF_SYMBOL_DEFINITION Operation_oneOrMore */
/**
 * @summary Operation_oneOrMore
 * @constant
 * @type {number}
 */
export const Operation_oneOrMore: Operation = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Operation_oneOrMore */

/* START_OF_SYMBOL_DEFINITION oneOrMore */
/**
 * @summary Operation_oneOrMore
 * @constant
 * @type {number}
 */
export const oneOrMore: Operation = Operation_oneOrMore; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION oneOrMore */

/* START_OF_SYMBOL_DEFINITION Operation_all */
/**
 * @summary Operation_all
 * @constant
 * @type {number}
 */
export const Operation_all: Operation = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Operation_all */

/* START_OF_SYMBOL_DEFINITION all */
/**
 * @summary Operation_all
 * @constant
 * @type {number}
 */
export const all: Operation = Operation_all; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION all */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Operation */
let _cached_decoder_for_Operation: $.ASN1Decoder<Operation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Operation */

/* START_OF_SYMBOL_DEFINITION _decode_Operation */
/**
 * @summary Decodes an ASN.1 element into a(n) Operation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Operation} The decoded data structure.
 */
export function _decode_Operation(el: _Element) {
    if (!_cached_decoder_for_Operation) {
        _cached_decoder_for_Operation = $._decodeInteger;
    }
    return _cached_decoder_for_Operation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Operation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Operation */
let _cached_encoder_for_Operation: $.ASN1Encoder<Operation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Operation */

/* START_OF_SYMBOL_DEFINITION _encode_Operation */
/**
 * @summary Encodes a(n) Operation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Operation, encoded as an ASN.1 Element.
 */
export function _encode_Operation(
    value: Operation,
    elGetter: $.ASN1Encoder<Operation>
) {
    if (!_cached_encoder_for_Operation) {
        _cached_encoder_for_Operation = $._encodeInteger;
    }
    return _cached_encoder_for_Operation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Operation */

/* eslint-enable */
