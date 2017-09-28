// Optional Parameter Section
var query;
var filterSearch;
var beginDate;
var endDate;
var sortSearchResults;
var fieldList;
var highlight;
var pageNumbers;
var facetLists;
var facetFilter;

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "86c89b0174404178a94793a03f565880",
  'q': query,
  'fq': filterSearch,
  'begin_date': beginDate,
  'end_date': endDate,
  'sort': sortSearchResults,
  'fl': fieldList,
  'hl': highlight,
  'page': pageNumbers,
  'facet_field': facetLists,
  'facet_filter': facetFilter
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});
